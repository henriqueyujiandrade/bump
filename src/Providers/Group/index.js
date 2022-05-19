import { useEffect } from "react";
import { createContext, useState } from "react";

import api from "../../Services/api";

export const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
    const [group, setGroup] = useState([]);
    const [tokenGroup, setTokenGroup] = useState(
        JSON.parse(localStorage.getItem("@bump:token")) || ""
    );
    const [myInfo, setMyInfo] = useState(
        JSON.parse(localStorage.getItem("@bump:myInfo")) || ""
    );

    useEffect(() => {
        if (tokenGroup) {
            api.get("group", {
                headers: {
                    Authorization: `Bearer ${tokenGroup}`,
                },
            }).then((response) => {
                setGroup(
                    response.data.filter((gp) =>
                        gp.membros.find((membro) => membro.id == myInfo.id)
                    )
                );
            });
        }
    }, [tokenGroup, myInfo]);

    const addGroup = (data) => {
        const status = "admin";
        const admin = { ...myInfo, status };
        const membros = [admin];
        const newData = { ...data, membros };
        api.post(`group`, newData, {
            headers: {
                Authorization: `Bearer ${tokenGroup}`,
            },
        })
            .then((response) => setGroup([...group, response.data]))
            .catch((err) => console.log(err));
    };

    const removeGroup = (id) => {
        api.delete(`group/${id}`, {
            headers: {
                Authorization: `Bearer ${tokenGroup}`,
            },
        })
            .then((response) => setGroup(group.filter((gp) => gp.id != id)))
            .catch((err) => console.log(err));
    };

    return (
        <GroupContext.Provider
            value={{ group, addGroup, removeGroup, setTokenGroup, setMyInfo }}
        >
            {children}
        </GroupContext.Provider>
    );
};
