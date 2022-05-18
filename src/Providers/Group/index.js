import { useEffect } from "react";
import { createContext, useState } from "react";
import uuid from "react-uuid";
import api from "../../Services/api";

export const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
    const [group, setGroup] = useState([]);
    const [token, setToken] = useState(
        JSON.parse(localStorage.getItem("@bump:token")) || ""
    );
    const [myInfo, setMyInfo] = useState(
        JSON.parse(localStorage.getItem("@bump:myInfo")) || ""
    );

    useEffect(() => {
        if (token) {
            api.get("group", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then((response) => {
                setGroup(
                    response.data.filter((gp) =>
                        gp.membros.find((membro) => membro.id == myInfo.id)
                    )
                );
            });
        }
    }, [token]);

    const addGroup = (data) => {
        const groupId = uuid();
        const status = "admin";
        const admin = { ...myInfo, status };
        const membros = [admin];
        const tasks = [];
        const newData = { ...data, membros, tasks, groupId };
        api.post(`group`, newData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => setGroup([...group, response.data]))
            .catch((err) => console.log(err));
    };

    const removeGroup = (id) => {
        api.delete(`group/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => setGroup(group.filter((gp) => gp.id != id)))
            .catch((err) => console.log(err));
    };

    return (
        <GroupContext.Provider value={{ group, addGroup, removeGroup }}>
            {children}
        </GroupContext.Provider>
    );
};