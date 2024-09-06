import React, { useContext } from 'react';
import { CountryContext } from '../context/CountryContext';
import { useParams, Link } from 'react-router-dom';


const BorderCountries = () => {
    const {countries, loading}=useContext(CountryContext)
   const {slug}=useParams();
   const country=countries.find(c=>c.name.common===decodeURIComponent(slug) )
   const borders = country.borders
console.log(country);
console.log(Object.values(country.languages));


const bordersCca3=borders.map((border)=>(countries.find(obj=>obj.cca3===border)))
const bordersCountries=bordersCca3.map((border)=>(border.name.common))
   
    return (
 <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
    <div className="h-32 rounded-lg lg:col-span-2">
    <img src={country.flags.svg} alt="" />
  </div>

  <div className="h-32 rounded-lg bg-gray-200">
  </div>
  <div className="h-32 rounded-lg bg-gray-200">
  <h1> <span className='font-bold'>Top Level Domain </span>: {country.tld}</h1>
  <h1> <span className='font-bold'>Currencies </span>: {Object.values(country.currencies)[0].name}</h1>
  <h1> <span className='font-bold'>Languages </span>: {Object.values(country.languages)}</h1>

  </div>
  <h3 className='text-xl p-5 '>Borders :</h3>
        {bordersCountries.map((borderCountry, index)=>(
            <Link to={`/${borderCountry}`}>  
            <div key={index} className="p-5 rounded-md lg:w-auto shadow-md">
                <h5>{borderCountry}</h5>
        </div>
        </Link>
        ))}
     
</div>
    );
};

export default BorderCountries;