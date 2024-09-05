import React from 'react';

const SearchButton = () => {
    return (
        <div className='lg:w-auto'>
            <div className="relative">
                <label htmlFor="Search" className="sr-only">Search</label>

                <input
                    type="text"
                    id="Search"
                    placeholder="Search for a country"
                    className="w-full rounded-md border px-4 border-gray-400 py-4 pe-20 shadow-md sm:text-md"
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
        </div>
    );
};

export default SearchButton;
