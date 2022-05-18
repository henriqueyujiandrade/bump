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
            members: [1, 1, 1],
            id: 3,
        },
        {
            description: "Atividade 02",
            status: "andamento",
            expirationDate: "17-05-2022",
            creationDate: "08-06-2022",
            members: [1, 2],
            id: 1,
        },
        {
            description: "Atividade 03",
            status: "concluida",
            expirationDate: "17-04-2022",
            creationDate: "03-09-2022",
            members: [1],
            id: 6,
        },
        {
            description: "Atividade 04",
            status: "concluida",
            expirationDate: "01-04-2021",
            creationDate: "03-09-2022",
            members: [1],
            id: 22,
        },
        {
            description: "Atividade 05",
            status: "andamento",
            expirationDate: "22-08-2022",
            creationDate: "03-09-2022",
            members: [1],
            id: 2122,
        },
    ]);
    const [token, setToken] = useState(
        JSON.parse(localStorage.getItem("@bump:token")) || ""
    );

    useEffect(() => {
        api.get("group", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            console.log(response);
        });
    }, []);

    const addTask = (data) => {
        api.post(`group`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    };

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
