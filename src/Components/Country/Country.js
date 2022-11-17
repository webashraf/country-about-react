import React from 'react';
import css from './country.css';
import Details from './../Details/Details';
// import { BrowserRouter, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Country = (props) => {
    // console.log(props.country);
    const{name, language, flags, independent, currencies, maps, region, timezones, translations} = props.country;
    const names = name.common
    // console.log(translations);

    return (
        <div className='countryBody'>
            
            <img className='flag' src={flags.svg} alt="" />
            <h3 className='cName'>{name.common}</h3>
            <Link to={`/details/${names}`}><button>View Details</button></Link>
        </div>
    );
};

export default Country;