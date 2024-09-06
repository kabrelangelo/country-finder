import React, { useContext } from 'react';
import { CountryContext } from '../context/CountryContext';
import { useParams, Link } from 'react-router-dom';

const DetailsCountries = () => {
  const { countries, loading } = useContext(CountryContext);
  const { slug } = useParams();
  
  const country = countries.find(c => c.name.common === decodeURIComponent(slug));
  const borders = country.borders;

  const bordersCca3 = borders.map(border => countries.find(obj => obj.cca3 === border));
  const bordersCountries = bordersCca3.map(border => border?.name?.common);

  return (
    <div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
    
    <div className="lg:col-span-2">
      <img src={country.flags.svg} alt={`${country.name.common} flag`} className="w-full h-auto rounded-lg shadow-lg" />
    </div>
    
    <div className="lg:col-span-1 space-y-2">
        <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Native Name</h2>
        <p>{Object.values(country.name.nativeName)[0].common}</p>
      </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Population</h2>
        <p>{country.population}</p>
      </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Region</h2>
        <p>{country.region}</p>
      </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Sub Region</h2>
        <p>{country.subregion}</p>
      </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Capital</h2>
        <p>{country.capital}</p>
      </div>

    </div> 
    
    <div className="lg:col-span-1 space-y-4">
      <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Top Level Domain</h2>
        <p>{country.tld.join(', ')}</p>
      </div>
      
      <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Currencies</h2>
        <p>{Object.values(country.currencies).map(currency => currency.name).join(",")}</p>
      </div>
      
      <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Languages</h2>
        <p>{Object.values(country.languages)}</p>
      </div>
    </div>
    
  </div>



    
      {bordersCountries.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold">Border Countries:</h3>
          <div className="flex flex-wrap gap-4 mt-4">
            {bordersCountries.map((borderCountry, index) => (
              <Link key={index} to={`/${borderCountry}`} className="p-3 bg-gray-100 rounded-md shadow hover:bg-gray-200 transition">
                {borderCountry}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsCountries;
