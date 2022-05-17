import { createContext, useState } from "react";
import api from "../../Services/api";
import { useHistory } from "react-router-dom";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {

    const [authenticated, setAuthenticated] = useState()

    const history = useHistory()

    const confirmLogin = (data) => {

        api.post("login", data)
            .then((response) => {
                console.log('funfou')
                history.push("/dashboard/1")
                setAuthenticated(true)
            })
            .catch((err) => {
                console.log("n funfou")
            })

    };


    return (
        <LoginContext.Provider value={{ confirmLogin, authenticated, setAuthenticated }}>
            {children}
        </LoginContext.Provider>
    );


}