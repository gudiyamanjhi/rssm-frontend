import { createContext, useContext, useState } from "react";

export const userContext = createContext();

export const useUserContext = () => {
    return useContext(userContext);
};

export const AuthUserContext = ({ children }) => {
    const [age, setAge] = useState("Sonali");

    return (
        <>
            <userContext.Provider value={{ age, setAge }}>
                {children}
            </userContext.Provider>
        </>
    )
}