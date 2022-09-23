
import React from 'react';
import './Country.css'

const Country = (props) => {

    return (
        <div className='country'>
            <h2>Country Name: {props.name}</h2>
            <img src={props.flags} alt=""/>
            <p>Population: {props.population}</p>
            <p>Region: {props.region}</p>
            <p><small>Area: {props.area}</small></p>
        </div>
    );
};

export default Country;