import React from 'react';
import css from './inner.css'

const Inner = (props) => {
    const{name, languages, flags, independent, currencies, maps, region, timezones, translations} = props.country;
    console.log(translations);
    return (
        <div className='innerBody'>
            <img src={flags.png} alt="" />
            <h1>{name.common}</h1>
            <pre>{`Language: ${languages.eng}, Region: ${region}, Timezones: ${timezones}`}</pre>
            <p>{independent}</p>
            {
            function (){
                switch (independent) {
                    case true:
                        return <h6>Freedom</h6>
                        break;
    
                    default:
                        return <h6>No freedom</h6>
                        break;
                }
            }
            }
        </div>
    );
};

export default Inner;