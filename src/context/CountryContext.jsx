import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const CountryContext=createContext()



export default function CountryContextProvider({children}){
    const [countries, setCountries]=useState([]);
    const [loading, setLoading]=useState(true)
    const fetchData=async()=>{
        try{
        const response=await axios.get("https://restcountries.com/v3.1/all")
        setCountries(response.data)
        setLoading(false)
    }catch(error){
        console.error("Problème de connexion au serveur:", error)
        setLoading(false)
    }
    }
    
useEffect(()=>{   
    fetchData()
}, [])
    return(
        <CountryContext.Provider value={{countries ,loading}}>
            {children}
        </CountryContext.Provider>
    )
}