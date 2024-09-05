import React from 'react';
import Card from './Card';

const Countries = () => {
    return (
        <div className="grid grid-cols-1 m-auto gap-6 sm:grid-cols-2 lg:grid-cols-4 p-4">
            <Card/>
        </div>
    );
};

export default Countries;