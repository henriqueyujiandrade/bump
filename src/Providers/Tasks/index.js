import { useEffect } from "react";
import { createContext, useState } from "react";
import uuid from "react-uuid";

import api from "../../Services/api";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([
        {
            description: "Atividade 01",
            status: "andamento",
            expirationDate: "16-05-2022",
            creationDate: "01-01-2021",
            owner: [1],
            members: [1, 1, 1],
            id: 13131313,
            subTasks: [],
        },
        {
            description: "Atividade 02",
            status: "andamento",
            expirationDate: "10-06-2022",
            creationDate: "01-02-2021",
            owner: [1],
            members: [1, 1, 1],
            id: 1213,
            subTasks: [],
        },
        {
            description: "Atividade 03",
            status: "concluida",
            expirationDate: "01-09-2022",
            creationDate: "01-01-2021",
            owner: [1],
            members: [1, 1],
            id: 1413,
            subTasks: [],
        },
        {
            description: "Atividade 04",
            status: "andamento",
            expirationDate: "12-05-2018",
            creationDate: "01-01-2021",
            owner: [1],
            members: [1, 1, 1],
            id: 112,
            subTasks: [],
        },
        {
            description: "Atividade 05",
            status: "andamento",
            expirationDate: "02-05-2021",
            creationDate: "01-01-2022",
            owner: [1],
            members: [1, 1, 1],
            id: 13,
            subTasks: [],
        },
        {
            description: "Atividade 06",
            status: "concluida",
            expirationDate: "22-03-2022",
            creationDate: "01-01-2021",
            owner: [1],
            members: [1, 1, 1],
            id: 222,
            subTasks: [],
        },
    ]);
    const [token, setToken] = useState(
        JSON.parse(localStorage.getItem("@bump:token")) || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlMUBtYWlsLmNvbSIsImlhdCI6MTY1Mjg0MzA5NCwiZXhwIjoxNjUyODQ2Njk0LCJzdWIiOiIzIn0.24-EJjgDTz08vXVs_KoljSSijMBFkN6GHfM5dL3A6dU"
    );
    const [subTasks, setSubTasks] = useState([])
    
    console.log(subTasks)
    useEffect(()=>{
        if(token){

<<<<<<< HEAD
        
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
=======
    useEffect(() => {
        api.get("group", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            console.log(response);
        });
    }, []);
>>>>>>> 3034112e21ae67da14e8d22e1e63033203da22b0

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