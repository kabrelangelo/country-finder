import { useContext } from "react";
import { createContext, useState } from "react";

export const DarkModeContext=createContext();

export default function DarkModeProvider({children}){

const [darkMode, setDarkMode]=useState(false)

    function toggleButton(){
        setDarkMode(!darkMode)
        console.log(darkMode);
        
    }
    return(
        <DarkModeContext.Provider value={{darkMode, toggleButton}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export const useDarkModeContext=()=>{
    return useContext(DarkModeContext)
}