import { createContext, useState } from "react";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([
        {
            description: "Criar projeto de notificação",
            creationDate: "10/05/2022",
            expirationDate: "26/03",
            id: 1,
            group: [1, 2, 3],
        },
        {
            description: "Estilizar página dashboard",
            creationDate: "09/03/2022",
            expirationDate: "29/03",
            group: [1],
            id: 2,
        },
    ]);

    const addTask = (product) => {
        setTasks([...tasks, product]);
    };

    const removeTask = (id) => {
        const list = tasks.filter((product) => product.id !== id);
        setTasks(list);
    };

    return (
        <TasksContext.Provider value={{ tasks, addTask, removeTask }}>
            {children}
        </TasksContext.Provider>
    );
};
