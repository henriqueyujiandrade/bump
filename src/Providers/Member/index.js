import { useEffect } from "react";
import { createContext, useState } from "react";

import api from "../../Services/api";

export const MemberContext = createContext();

export const MemberProvider = ({ children }) => {
    const [member, setMember] = useState([]);
    const [tokenMember, setTokenMember] = useState(
        JSON.parse(localStorage.getItem("@bump:token")) || ""
    );
    const [users, setUsers] = useState([]); 
     
    const [gpId, setGpId] = useState('1')

    useEffect(() => {
        if (tokenMember) {
            api.get("group", {
                headers: {
                    Authorization: `Bearer ${tokenMember}`,
                },
            }).then((response) => {
                const thisGp = response.data.filter(
                    (gp) => gp.id == gpId
                );

                setMember(thisGp[0].membros);
            });

            api.get("users", {
                headers: {
                    Authorization: `Bearer ${tokenMember}`,
                },
            }).then((response) => {
                setUsers(response.data);
            });
        }
    }, [tokenMember, gpId]);

    const addMember = (groupId,data) => {
        if (
            !users.find((user) => user.email == data.email) ||
            member.find((mb) => mb.email == data.email)
        ) {
            console.log("usuário não encontrado ou já adicionado");
        } else {
            const dev = users.find((user) => user.email == data.email);
            const { name, id } = dev;
            const status = "dev";
            const newMember = { ...data, status, name, id };
            const membros = [...member, newMember];
            api.patch(
                `group/${groupId}`,
                { membros: membros },
                {
                    headers: {
                        Authorization: `Bearer ${tokenMember}`,
                    },
                }
            ).then((response) => setMember(membros));
        }
    };

    const removeMember = (groupId,id) => {
        const filteredMembers = member.filter((user) => user.id != id);
        api.patch(
            `group/${groupId}`,
            { membros: filteredMembers },
            {
                headers: {
                    Authorization: `Bearer ${tokenMember}`,
                },
            }
        ).then((response) => setMember(filteredMembers));
    };

    return (
        <MemberContext.Provider value={{ member, addMember, removeMember, setGpId, setTokenMember }}>
            {children}
        </MemberContext.Provider>
    );
};
