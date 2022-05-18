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