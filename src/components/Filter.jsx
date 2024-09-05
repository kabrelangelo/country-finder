import React from 'react';

const Filter = () => {
    return (
        <div className="p-5  rounded-md lg:w-auto shadow-md">
            <select name="countries" id="" className='py-4 pe-20 cursor-pointer' >
                <option value=""  >Filter by Region</option>
                <option value="africa" >Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    );
};

export default Filter;
