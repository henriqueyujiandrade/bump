import { createContext, useEffect, useState } from "react";



export const TasksContext = createContext()

export const TasksProvider = ({children}) => {
    const [tasks, setTasks] = useState([])
    

 


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
