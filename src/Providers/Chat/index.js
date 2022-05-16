import { useEffect } from "react";
import { createContext, useState } from "react";
import api from "../../Services/api";


export const ChatContext = createContext()

export const ChatProvider = ({children}) => {
    
    const[chat, setChat] = useState([])
    const [token, setToken] = useState( JSON.parse(localStorage.getItem('@bump:token')) || '')
    
    // useEffect(()=>{
    //     api.get('chat',{
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         }
    //     })
    //     .then((response) =>{
            
    //     })

    // },[])

    const addChat = (data) =>{
        api.post(`chat`,data, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    }
    
    const removeChat = () =>{

    }


    return (
        <ChatContext.Provider value={{ chat,addChat, removeChat }}>
            {children}
        </ChatContext.Provider>
    );
};