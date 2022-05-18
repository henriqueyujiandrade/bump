import { useEffect } from "react";
import { createContext, useState } from "react";
import uuid from "react-uuid";

import api from "../../Services/api";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [token, setToken] = useState(
        JSON.parse(localStorage.getItem("@bump:token")) || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlMUBtYWlsLmNvbSIsImlhdCI6MTY1Mjg0MzA5NCwiZXhwIjoxNjUyODQ2Njk0LCJzdWIiOiIzIn0.24-EJjgDTz08vXVs_KoljSSijMBFkN6GHfM5dL3A6dU"
    );
    const [subTasks, setSubTasks] = useState([])
    
    console.log(subTasks)
    useEffect(()=>{
        if(token){

        
        api.get('task',{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then((response) =>{
                setTasks(response.data.filter((task) => task.taskId == "8da51ca4-204f-4264-a9bb-989851c5aadb"))
        })
        }

    },[token])

    const addTask = (data) => {
        const taskId = "8da51ca4-204f-4264-a9bb-989851c5aadbw";
        const status = "pending";
        const subTask = [];        
        const finalData = {...data, taskId, status, subTask};
        api.post(`task`, finalData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => setTasks([...tasks, response.data]))
    };

    const removeTask = (id) => {
        api.delete(`task/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => setTasks(tasks.filter((task) => task.id != id)))
            .catch((err) => console.log(err));
    };
    

    const addSubTask = (idDefault, data) => {
        const status = "pending";
        const idFromTask = idDefault
        const subTaskId = uuid()
        const newSubTask = {...data, status, idFromTask, subTaskId}
        const finalSubTasks = [...subTasks, newSubTask]
        api.patch(`task/${idDefault}`,{subTask:finalSubTasks}, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then((response) => setSubTasks(finalSubTasks))
    };
    

    const removeSubTask = (idDefault,id) => {
        const filteredSubTask = subTasks.filter((task) => task.subTaskId != id)
        api.patch(`task/${idDefault}`,{subTask:filteredSubTask}, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then((response) => setSubTasks(filteredSubTask))
    };
    
    const dataexample = {title:"SubTask", time:"20/05/2022",subTaskMembro:"Henrique"}
    return (
        <TasksContext.Provider value={{ tasks, addTask, removeTask }}>
            {children}
            <button onClick={() => addSubTask(1,dataexample)}>botaodoProviderAdd</button>
            <button onClick={() => removeSubTask(1,"efcd2-6f10-21ab-43-43aa6dd70765")}>botaodoProviderRemove</button>            
        </TasksContext.Provider>
    );
};
