import React, { useContext } from 'react';
import { CountryContext } from '../context/CountryContext';
import { useParams } from 'react-router-dom';

const BorderCountries = () => {
    const {countries, loading}=useContext(CountryContext)
   const {slug}=useParams();
   const country=countries.find(c=>c.name.common===decodeURIComponent(slug) )
   const findCountries=(arr, key, value)=>{
    return arr.find(obj=>odj[key]=value)
   }
findCountries(countries, )
    return (
        <div className='mx-20 h-[30%] justify-end'>
            
        </div>
    );
};

export default BorderCountries;