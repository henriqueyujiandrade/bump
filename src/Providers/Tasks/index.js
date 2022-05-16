
import { useEffect } from "react";
import { createContext, useState } from "react";
import api from "../../Services/api";


export const TasksContext = createContext()

export const TasksProvider = ({children}) => {
    const [tasks, setTasks] = useState([])    
    const [token, setToken] = useState( JSON.parse(localStorage.getItem('@bump:token')) || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlMUBtYWlsLmNvbSIsImlhdCI6MTY1MjY2Mzg1OCwiZXhwIjoxNjUyNjY3NDU4LCJzdWIiOiIzIn0.iRU1ydMquhjcPBIiqjVaa5hJ0NZMCSosbOFd5xhmcUw')
    
    // useEffect(()=>{
    //     api.get('group',{
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         }
    //     })
    //     .then((response) =>{
           
    //     })

    // },[])

    const addTask = (data) =>{
        api.post(`group`,data, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    }
 
    const removeTask = (id) => {
        const list = tasks.filter((product) => product.id !== id);
        setTasks(list);
    };


    const addSubTask = (product) => {
        setTasks([...tasks, product]);
    };

    const removeSubTask = (id) => {
        const list = tasks.filter((product) => product.id !== id);
        setTasks(list);
    };

    return (
        <TasksContext.Provider value={{ tasks, addTask, removeTask }}>
            {children}
        </TasksContext.Provider>
    );
};
