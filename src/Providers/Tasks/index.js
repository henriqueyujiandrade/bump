
import { useEffect } from "react";
import { createContext, useState } from "react";
import api from "../../Services/api";


export const TasksContext = createContext()

export const TasksProvider = ({children}) => {
    const [tasks, setTasks] = useState([])
    const [group, setGroup] = useState([])
    const [token, setToken] = useState( JSON.parse(localStorage.getItem('@bump:token')) || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlMUBtYWlsLmNvbSIsImlhdCI6MTY1MjQ1ODcyNiwiZXhwIjoxNjUyNDYyMzI2LCJzdWIiOiIzIn0.5_B5SYMOqiD5ftaoNlS_ni9Hb5hKxM6nwEccmdYEu4c')
    
    useEffect(()=>{
        api.get('group',{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then((response) =>{
            console.log(response)
        })

    },[])

    const addGroup = (data) =>{
        api.post(`group`,data, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    }
 


    const addTask = (product) => {
        setTasks([...tasks, product])       
        
    }
    
    const removeTask = (id) =>{    
        const list = tasks.filter((product) => product.id !== id)
        setTasks(list)
              
    }
    
    return(
        <TasksContext.Provider value={{tasks, addTask, removeTask}}>
            {children}
        </TasksContext.Provider>
    )
}
