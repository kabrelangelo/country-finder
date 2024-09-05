import React, { useContext } from 'react';
import { CountryContext } from '../context/CountryContext';

const Card = () => {
const {countries}=useContext(CountryContext)

    return (
        <>

        { countries.map((country, index)=>(
            <div key={index} className="bg-white p-6 rounded-lg 
           transition-transform duration-500 transform hover:scale-105 cursor-pointer
           opacity-0 animate-fadeIn shadow-md">
         <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className='h-48 w-full object-cover' />

            <h5 className="text-xl font-bold mb-2"> {country.name.common} </h5>
            <h5 className="text-lg font-semiBold mb-2"> {country.capital} </h5>
            <h5 className="text-lg font-semiBold mb-2"> {country.population} </h5>  
        </div>
       )) } 
        
        </>
    );
};

export default Card;