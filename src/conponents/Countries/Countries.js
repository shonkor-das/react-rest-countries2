
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [Countries, setCountries ] = useState([])

    // # data load

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data => setCountries(data));
    }, [])

    return (
        <div>
            <h1>Hello from Countries: {Countries.length}</h1>
        <div className='countries-container'>
            {
                Countries.map(country => <Country 
                    key={country.cca3}
                    name={country.name.common} 
                    population={country.population}
                    region ={country.region}
                    area={country.area}
                    flags={country.flags.png}>
                    </Country>)
            }
        </div>
        </div>
    );
};

export default Countries;