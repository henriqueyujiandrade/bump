import { useEffect } from "react";
import { createContext, useState } from "react";
import api from "../../Services/api";


export const ChatContext = createContext()

export const ChatProvider = ({children}) => {
    const[chat, setChat] = useState([])
    const [tokenChat, setTokenChat] = useState( JSON.parse(localStorage.getItem("@bump:token")) || "")
    const [myInfoChat, setMyInfoChat] = useState(
        JSON.parse(localStorage.getItem("@bump:myInfo")) || ""
    );
    const [idChat, setIdChat] = useState(JSON.parse(localStorage.getItem("@bump:groupid")) || "")
    
    useEffect(()=>{
        if(tokenChat && idChat)
        api.get(`group/${idChat}?_embed=chat`,{
            headers: {
                Authorization: `Bearer ${tokenChat}`,
            }
        })
        .then((response) =>{
            setChat(response.data.chat)
        })

    },[tokenChat, idChat])

    const addChat = (id,data) =>{
        const groupId = Number(id);
        const userId = myInfoChat.id
        const name = myInfoChat.name
        const final = {...data, groupId, userId, name}  
        api.post(`chat`, final, {
            headers: {
                Authorization: `Bearer ${tokenChat}`,
            }
        })
        .then((response) => setChat([...chat, response.data]))
    }

    return (
        <ChatContext.Provider value={{ chat,addChat, setTokenChat, setMyInfoChat, setIdChat }}>
            {children}
        </ChatContext.Provider>
    );
};