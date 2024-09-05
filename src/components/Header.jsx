import React from 'react';
import Navbar from './Navbar';
import SearchButton from './SearchButton';
import Filter from './Filter';

const Header = () => {
    return (
        <>
            <Navbar />

            {/* Container for SearchButton and Filter */}
            <div className="flex flex-col lg:flex-row items-center justify-between w-full space-y-4 lg:space-y-0 lg:space-x-4 p-4 lg:px-8">
                <SearchButton />
                <Filter />
            </div>
        </>
    );
};

export default Header;
