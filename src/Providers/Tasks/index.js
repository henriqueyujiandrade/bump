import { useEffect } from "react";
import { createContext, useState } from "react";
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

    const [tokenTask, setTokenTask] = useState(
        JSON.parse(localStorage.getItem("@bump:token")) || ""
    );
    const [myInfoInTask, setMyInfoInTask] = useState(JSON.parse(localStorage.getItem("@bump:myInfo")) || "")

    const [groupId, setGroupId] = ('2')
    const [subTasks, setSubTasks] = useState([])
    const [taskId, setTaskId] = useState('3')

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

    const addTask = (id,data) => {
        const groupId = Number(id);
        const status = "andamento";               
        const finalData = {...data, groupId, status};
        api.post(`task`, finalData, {
            headers: {
                Authorization: `Bearer ${tokenTask}`,
            },
        })
        .then((response) => setTasks([...tasks, response.data]))
    };

    const removeTask = (id) => {        
        api.delete(`task/${id}`, {
            headers: {
                Authorization: `Bearer ${tokenTask}`,
            },
        })
            .then((response) => setTasks(tasks.filter((tk) => tk.id !== id)))
            .catch((err) => console.log(err));
    };

    const addSubTask = (id,data) => {
        const taskId = Number(id);
        const status = "andamento";
        const membro = [{...myInfoInTask}]               
        const finalData = {...data, taskId, status, membro};
        api.post(`subtask`, finalData, {
            headers: {
                Authorization: `Bearer ${tokenTask}`,
            },
        })
        .then((response) => setSubTasks([...subTasks, response.data]))
    };

    const removeSubTask = (id) => {
        api.delete(`subtask/${id}`, {
            headers: {
                Authorization: `Bearer ${tokenTask}`,
            },
        })
            .then((response) => setTasks(subTasks.filter((subtk) => subtk.id !== id)))
            .catch((err) => console.log(err));
    };

    return (
        <TasksContext.Provider value={{ tasks, subTasks, addTask, removeTask, groupId, setGroupId, setTokenTask, setMyInfoInTask, setTaskId, addSubTask, removeSubTask }}>
            {children}           
        </TasksContext.Provider>
    );
};
