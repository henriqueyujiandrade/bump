import { useEffect } from "react";
import { createContext, useState } from "react";

import api from "../../Services/api";


export const MemberContext = createContext()

export const MemberProvider = ({children}) => {
    
    const[member, setMember] = useState([])
    const [token, setToken] = useState( JSON.parse(localStorage.getItem("@bump:token")) || "")
    
    console.log(member)
   
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
    }

    },[token])

    const addMember = (data) =>{
        const status = "dev"
        const newMember = {...data, status}
        const membros = [...member, newMember]
        api.patch(`group/2`,{membros:membros}, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then((response) => setMember([...member, newMember]))
    }
    
    const removeMember = () =>{

    }


    return (
        <MemberContext.Provider value={{ member,addMember, removeMember }}>
            {children}
        </MemberContext.Provider>
    );
};