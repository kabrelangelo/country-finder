import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CountryContext } from '../context/CountryContext';

const Card = ({country, index}) => {
    return (
        <div key={index} className="bg-white p-6 rounded-lg 
           transition-transform duration-500 transform hover:scale-105 cursor-pointer
           opacity-0 animate-fadeIn shadow-md">
            <Link to={`/${encodeURIComponent(country.name.common)}`} >
         <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className='h-48 w-full object-cover' />

            <h5 className="text-xl font-bold mb-2"> {country.name.common} </h5>
            <h5 className="text-md mb-2">
  <span className="font-semibold">Capital:</span> {country.capital}
</h5>
<h5 className="text-md mb-2">
  <span className="font-semibold">Population:</span> {country.population} habitants
</h5>
</Link>
        </div>

    );
};

export default Card;