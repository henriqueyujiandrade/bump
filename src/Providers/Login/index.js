import { createContext, useState } from "react";
import api from "../../Services/api";
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState();

    const history = useHistory();

    const confirmLogin = async (setToken,setInfo, setTokTask, setMyInfoTask,setTokenMember, setMyInfoInMembers,setTokenChat, setMyInfoChat, data) => {
        await api
            .post("login", data)
            .then((response) => {
                console.log(response.data.accessToken);
                window.localStorage.clear();
                window.localStorage.setItem(
                    "@bump:token",
                    JSON.stringify(response.data.accessToken)
                );
                window.localStorage.setItem(
                    "@bump:myInfo",
                    JSON.stringify(response.data.user) 
                );
                setToken(response.data.accessToken)
                setInfo(response.data.user) 
                setTokTask(response.data.accessToken)
                setMyInfoTask(response.data.user)
                setTokenMember(response.data.accessToken) 
                setMyInfoInMembers(response.data.user)
                setTokenChat(response.data.accessToken)
                setMyInfoChat(response.data.user)

                toast.success("Login realizado com sucesso!");

                /*
                history.push(`/dashboard/${response.data.user.id}`) */
                history.push(`/dashboard`);
                setAuthenticated(true);
                return response.data;
            })
            .catch(() => {
                toast.error("Senha e/ou Email invalidos");
            });
    };

    return (
        <LoginContext.Provider
            value={{ confirmLogin, authenticated, setAuthenticated }}
        >
            {children}
        </LoginContext.Provider>
    );
};
