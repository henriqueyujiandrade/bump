import { useEffect } from "react";
import { createContext, useState } from "react";
import uuid from "react-uuid";

import api from "../../Services/api";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
<<<<<<< HEAD
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
        const taskId = "";
        const status = "pending";
        const subTask = [];        
        const finalData = {...data, taskId, status, subTask};
=======

    const [tokenTask, setTokenTask] = useState(
        JSON.parse(localStorage.getItem("@bump:token")) || ""
    );
    const [myInfoInTask, setMyInfoInTask] = useState(
        JSON.parse(localStorage.getItem("@bump:myInfo")) || ""
    );

    const [groupId, setGroupId] = useState("");
    const [subTasks, setSubTasks] = useState([]);
    const [taskId, setTaskId] = useState("");

    useEffect(() => {
        if (tokenTask && groupId) {
            api.get(`group/${groupId}?_embed=task`, {
                headers: {
                    Authorization: `Bearer ${tokenTask}`,
                },
            }).then((response) => {
                setTasks(response.data.task);
            });
        }
    }, [tokenTask, groupId]);

    useEffect(() => {
        if (tokenTask && taskId) {
            api.get(`task/${taskId}?_embed=subtask`, {
                headers: {
                    Authorization: `Bearer ${tokenTask}`,
                },
            }).then((response) => {
                setSubTasks(response.data.subtask);
            });
        }
    }, [tokenTask, taskId]);

    const addTask = (id, data) => {
        const groupId = Number(id);
        const status = "andamento";
        const finalData = { ...data, groupId, status };
>>>>>>> 692df1215bf2d46bd6438bb2fea81022b6fcb1e3
        api.post(`task`, finalData, {
            headers: {
                Authorization: `Bearer ${tokenTask}`,
            },
<<<<<<< HEAD
        })
        .then((response) => setTasks([...tasks, response.data]))
=======
        }).then((response) => setTasks([...tasks, response.data]));
>>>>>>> 692df1215bf2d46bd6438bb2fea81022b6fcb1e3
    };

    const removeTask = (id) => {
        api.delete(`task/${id}`, {
            headers: {
<<<<<<< HEAD
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => setTasks(tasks.filter((task) => task.id != id)))
=======
                Authorization: `Bearer ${tokenTask}`,
            },
        })
            .then((response) => setTasks(tasks.filter((tk) => tk.id !== id)))
>>>>>>> 692df1215bf2d46bd6438bb2fea81022b6fcb1e3
            .catch((err) => console.log(err));
    };
    

<<<<<<< HEAD
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
=======
    const addSubTask = (id, data) => {
        const taskId = Number(id);
        const status = "andamento";
        const membro = [{ ...myInfoInTask }];
        const finalData = { ...data, taskId, status, membro };
        api.post(`subtask`, finalData, {
            headers: {
                Authorization: `Bearer ${tokenTask}`,
            },
        }).then((response) => setSubTasks([...subTasks, response.data]));
>>>>>>> 692df1215bf2d46bd6438bb2fea81022b6fcb1e3
    };
    

<<<<<<< HEAD
    const removeSubTask = (idDefault,id) => {
        const filteredSubTask = subTasks.filter((task) => task.subTaskId != id)
        api.patch(`task/${idDefault}`,{subTask:filteredSubTask}, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then((response) => setSubTasks(filteredSubTask))
=======
    const removeSubTask = (id) => {
        api.delete(`subtask/${id}`, {
            headers: {
                Authorization: `Bearer ${tokenTask}`,
            },
        })
            .then((response) =>
                setTasks(subTasks.filter((subtk) => subtk.id !== id))
            )
            .catch((err) => console.log(err));
>>>>>>> 692df1215bf2d46bd6438bb2fea81022b6fcb1e3
    };
    
    const dataexample = {title:"SubTask", time:"20/05/2022",subTaskMembro:"Henrique"}
    return (
        <TasksContext.Provider
            value={{
                tasks,
                subTasks,
                addTask,
                removeTask,
                groupId,
                setGroupId,
                setTokenTask,
                setMyInfoInTask,
                setTaskId,
                addSubTask,
                removeSubTask,
                setTasks,
            }}
        >
            {children}
            <button onClick={() => addSubTask(1,dataexample)}>botaodoProviderAdd</button>
            <button onClick={() => removeSubTask(1,"efcd2-6f10-21ab-43-43aa6dd70765")}>botaodoProviderRemove</button>            
        </TasksContext.Provider>
    );
};
