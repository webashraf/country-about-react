import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Inner from './InnerDetail/Inner';

const Details = () => {
    const {CId} = useParams();
    const [country, setCountry] = useState([]);
    // console.log(country);
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${CId}`
        fetch(url)
        .then(response => response.json())
        .then(data => setCountry(data))
    }, [])

    // const{name, language, flags, independent, currencies, maps, region, timezones, translations} = country;

    return (
        <div>
            {
                country.map(cDetail => {
                    
                    return <Inner country={cDetail}></Inner>
                })

            }
        </div>
    );
};

export default Details;