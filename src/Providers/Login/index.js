import { createContext, useState } from "react";
import api from "../../Services/api";
import { useHistory } from "react-router-dom";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState();

    const history = useHistory();

    const confirmLogin = async (data) => {
        await api
            .post("login", data)
            .then((response) => {
                console.log(response.data.accessToken);
                window.localStorage.clear();
                window.localStorage.setItem(
                    "@bump:token",
                    response.data.accessToken
                );
                window.localStorage.setItem(
                    "@bump:myInfo",
                    JSON.stringify(response.data.user)
                );
                /*
                history.push(`/dashboard/${response.data.user.id}`) */
                history.push(`/dashboard/1`);
                setAuthenticated(true);
                return response.data;
            })
            .catch((err) => {
                console.log("n funfou");
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
