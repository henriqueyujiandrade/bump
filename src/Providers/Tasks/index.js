import { useEffect } from "react";
import { createContext, useState } from "react";
import api from "../../Services/api";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
<<<<<<< HEAD
    const [tasks, setTasks] = useState([]);

    const addTask = (product) => {
        setTasks([...tasks, product]);
    };

    const removeTask = (id) => {
        const list = tasks.filter((product) => product.id !== id);
        setTasks(list);
    };

=======
    const [tasks, setTasks] = useState([
        {
            description: "Atividade 01",
            status: "andamento",
            expirationDate: "16-05-2022",
            creationDate: "01-01-2021",
            members: [1, 1, 1],
            id: 1,
            subTasks: [],
        },
        {
            description: "Atividade 02",
            status: "concluida",
            expirationDate: "22-05-2022",
            creationDate: "01-01-2021",
            members: [1, 1, 1],
            id: 2,
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

>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
    return (
        <TasksContext.Provider value={{ tasks, addTask, removeTask }}>
            {children}
        </TasksContext.Provider>
    );
};
