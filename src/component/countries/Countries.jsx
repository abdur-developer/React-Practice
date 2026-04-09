import React, { useEffect, useState } from 'react';
import './Countries.css'
import Country from '../country/Country';
const Countries = () => {
    const [countries, setCoumntries] = useState([]);
    const [names, setNames] = useState([]);
    const [flags, setFlags] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=cca3,name,flags")
            .then(res => res.json())
            .then(data => setCoumntries(data));
    }, [])

    const handleNames = (name) => { //toggle
        const exist = names.find(n => n == name);
        if(exist) setNames(names.filter(n => n != name))
        else setNames([...names, name])
    }
    const handleFlags = (flag) => { //uniqe flag
        if(!flags.includes(flag)) setFlags([...flags, flag])
    }

    return (
        <>
            <div className="show-details">
                <p className="names">
                    {names.map(name => <span>{name}</span>)}
                </p>
                <div className="flags">
                    {flags.map(flag => <img src={flag} />)}
                </div>
            </div>
            <div className='countries'>
                {countries.map(country => <Country country={country} flagClick={handleFlags} nameClick={handleNames} ></Country>)}
            </div>
        </>
    );
};

export default Countries;