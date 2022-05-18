import { useEffect } from "react";
import { createContext, useState } from "react";

import api from "../../Services/api";


export const MemberContext = createContext()

export const MemberProvider = ({children}) => {
    
    const[member, setMember] = useState([])
    const [token, setToken] = useState( JSON.parse(localStorage.getItem("@bump:token")) || "")
    const [users, setUsers] = useState([])
    console.log(member)
   
    useEffect(()=>{
        if(token){       
        api.get("group",{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then((response) =>{
            const thisGp = response.data.filter((gp) => gp.groupId == "8da51ca4-204f-4264-a9bb-9895a3")
            
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

    const addMember = (data) =>{
        if(!users.find((user) => user.email == data.email) || member.find((mb) => mb.email == data.email)){
            console.log('usuário não encontrado ou já adicionado')
        }
        else{
        const dev = users.find((user) => user.email == data.email)
        const {name,id} = dev
        const status = "dev"
        const newMember = {...data, status, name, id}
        const membros = [...member, newMember]
        api.patch(`group/2`,{membros:membros}, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then((response) => setMember(membros))
        }
    }
    
    const removeMember = (id) =>{
        const filteredMembers = member.filter((user) => user.id != id)
        api.patch(`group/2`,{membros:filteredMembers}, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then((response) => setMember(filteredMembers))
    }
    


    return (
        <MemberContext.Provider value={{ member,addMember, removeMember }}>
            {children}
        </MemberContext.Provider>
    );
};