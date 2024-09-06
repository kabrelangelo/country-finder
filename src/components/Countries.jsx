import React, { useContext, useEffect, useState } from 'react';
import { CountryContext } from '../context/CountryContext';
import Card from './Card';

const Countries = () => {
    const {countries}=useContext(CountryContext)
    const [valueInput, setValueInput]=useState("");
    const [valueSelect, setValueSelect]=useState(
        localStorage.getItem("selectedRegion") || "");
    const trimValue=valueInput.trim().toLowerCase()
    const handleChangeInput=(e)=>{
        setValueInput(e.target.value)
    }
    const handleChangeSelect=(e)=>{
        setValueSelect(e.target.value)
        localStorage.setItem("selectedRegion", e.target.value)
    }
    useEffect(()=>{
        const savedRegion=localStorage.getItem("selectedRegion")
        if(savedRegion){
            setValueSelect(savedRegion)
        }
    }, [])
    return (
        <>
             <div className="flex flex-col lg:flex-row items-center justify-between w-full space-y-4 lg:space-y-0 lg:space-x-4 p-4 lg:px-8">

            <div className="relative">
                <label htmlFor="Search" className="sr-only">Search</label>
                <input
                    value={valueInput}
                    onChange={handleChangeInput}
                    type="text"
                    id="Search"
                    placeholder="Search for a country"
                    className="w-full rounded-md border px-4 border-gray-400 py-4 
                    pe-20 shadow-md sm:text-md"
                />

                <span className="absolute inset-y-0 right-0 grid w-10 place-content-center">
                    <button type="button" className="text-gray-600 hover:text-gray-700">
                        <span className="sr-only">Search</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </button>
                </span>
                </div>
                <div className="p-5  rounded-md lg:w-auto shadow-md">
            <select name="countries" value={valueSelect} className='py-4 pe-20 cursor-pointer' onChange={handleChangeSelect} >
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
        </div>
               
        <div className="grid grid-cols-1 m-auto gap-6 sm:grid-cols-2 lg:grid-cols-4 p-4">

                {
       valueInput ?   countries.filter((country)=>country.name.common.toLowerCase().includes(trimValue))    
                .map((country, index)=>(
         
        <Card key={index} country={country}/>
       )) : valueSelect ? countries.filter((country)=>country.region.includes(valueSelect))
       .map((country, index)=><Card country={country} key={index}/>)
       :countries.slice(0, 36).map((country, index)=>(
           <Card key={index} country={country}/> 
      ))
       
       }           
        </div>
        </>
    );
};

export default Countries;
