import { useEffect } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

import api from "../../Services/api";

export const MemberContext = createContext();

export const MemberProvider = ({ children }) => {
    const [member, setMember] = useState([]);
    const [tokenMember, setTokenMember] = useState(
        JSON.parse(localStorage.getItem("@bump:token")) || ""
    );
    const [users, setUsers] = useState([]); 
    const [myInfoInMembers, setMyInfoInMembers] = useState(JSON.parse(localStorage.getItem("@bump:myInfo")) || "")
    const [gpId, setGpId] = useState("2")

    useEffect(() => {
        if (tokenMember && gpId) {
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
            toast.warn('usuário não encontrado ou já adicionado')
            
        }
        else if(!member.filter((mb)=> mb.status == "admin").find((adm)=> adm.id == myInfoInMembers.id)){
            toast.error('Você deve ser administrador para adicionar membros')
        }
         else {
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
        if(!member.filter((mb)=> mb.status == "admin").find((adm)=> adm.id == myInfoInMembers.id)){
            toast.error('Você deve ser administrador para remover membros')
        }
        else{        
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
        }
    };

    return (
        <MemberContext.Provider value={{ member, addMember, removeMember, setGpId, setTokenMember, setMyInfoInMembers }}>
            {children}
        </MemberContext.Provider>
    );
};
