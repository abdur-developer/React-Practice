import React, { useState } from 'react';
import "./Data.css"

const Data = ({country, nameClick, flagClick}) => {
    const [flagAdded, setFlag] = useState(false);
    const [nameAdded, setName] = useState(false);
    const handleFlags = () => {
        flagClick(country.flags.png);
        setFlag(true);
    }
    const handleNames = () => {
        nameClick(country.name.common);
        setName(!nameAdded);
    }
    return (
        <div className='item'>
            <img src={country.flags.png}/>
            <h3>{country.name.common}</h3>
            <button onClick={handleNames}>{nameAdded ? "Remove " : "Add "} Name</button>
            <button onClick={handleFlags}>{flagAdded ? "Added ": "Add "} Flag</button>
        </div>
    );
};

export default Data;