import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import css from './home.css'

const Home = () => {
    const [countrys, setCountry] = useState([])
    // console.log(countrys);
    useEffect(() =>{
        const url = 'https://restcountries.com/v3.1/all'
        fetch(url)
        .then(response => response.json())
        .then(data => setCountry(data))
    }, [])
    return (
        <>
        <h1 className='heading'>All Countrys</h1>
        {
            countrys.map(countryAll => <Country key={countryAll.name.common} country={countryAll} ></Country>)
        }
        </>
    );
};

export default Home;