import React from 'react';
import { useDarkModeContext } from '../context/DarkModeContext';

const ToggleButton = () => {
    const {toggleButton}=useDarkModeContext()
   
    return (
        <div>
            <button onClick={toggleButton}>Dark Mode</button>
        </div>
    );
};

export default ToggleButton;