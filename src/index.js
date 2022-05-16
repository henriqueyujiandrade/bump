import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Providers from "./Providers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Providers>
                <ChakraProvider>
                    <App />
                </ChakraProvider>
            </Providers>
        </React.StrictMode>
    </BrowserRouter>
);
