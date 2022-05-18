import { useEffect } from "react";
import { createContext, useState } from "react";

import api from "../../Services/api";


export const MemberContext = createContext()

export const MemberProvider = ({children}) => {
    
    const[member, setMember] = useState([])
    const [token, setToken] = useState( JSON.parse(localStorage.getItem("@bump:token")) || "")
    const [users, setUsers] = useState([])
    
   
    useEffect(()=>{
        if(token){       
        api.get("group",{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then((response) =>{
            const thisGp = response.data.filter((gp) => gp.groupId == "8da51ca4-204f-4264-a9bb-989851c5aadb")
            
            setMember(thisGp[0].membros) 
           
        })

        api.get("users",{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then((response) =>{            
            
            setUsers(response.data) 
           
        })
    }

    },[token])

    const addMember = (idDefault,data) =>{
        if(!users.find((user) => user.email == data.email) || member.find((mb) => mb.email == data.email)){
            console.log('usuário não encontrado ou já adicionado')
        }
        else if(!member.filter((mb)=> mb.status == "admin").find((adm)=> adm.id == 2)){
            console.log('Você deve ser administrador para adicionar membros')
        }
        else{
        const dev = users.find((user) => user.email == data.email)
        const {name,id} = dev
        const status = "dev"
        const newMember = {...data, status, name, id}
        const membros = [...member, newMember]
        api.patch(`group/${idDefault}`,{membros:membros}, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then((response) => setMember(membros))
        }
    }
    
    const removeMember = (idDefault,id) =>{
        if(!member.filter((mb)=> mb.status == "admin").find((adm)=> adm.id == 2)){
            console.log('Você deve ser administrador para remover membros')
        }
        else{

        
        const filteredMembers = member.filter((user) => user.id != id)
        api.patch(`group/${idDefault}`,{membros:filteredMembers}, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then((response) => setMember(filteredMembers))
        }
    }
    


    return (
        <MemberContext.Provider value={{ member,addMember, removeMember }}>
            {children}
        </MemberContext.Provider>
    );
};

