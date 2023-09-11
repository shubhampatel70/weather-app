import React, { useEffect, useState } from 'react';
import './Weather.css';

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("ahmedabad");
    const [country, setCountry] = useState(null);
    const [weather, setWeather] = useState(null);
    useEffect( () => {
        const fetchApi = async () =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=77ae1f5ec40c09c6f20b7338596d5fba`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
            setCountry(resJson.sys);
            setWeather(resJson.weather)
        }

        fetchApi();
    },[search] )

    return(
        <>
            <div className='box'>
                <div className='inputData'>
                    <input 
                    type='search'
                    // value={search}
                    className='inputFeild'
                    onChange={ (event) => {
                        setSearch(event.target.value)
                    } } />
                </div>
        {!(city && country && weather) ? (
            <p className='errorMsg'> No Data Found</p>
        ) : (
            <>
            
            <div className='info'>
                    <h1 className='location'>
                    <i className="fa-sharp fa-solid fa-street-view"></i>{search}
                    </h1>
                    <h2 className='temp'>
                        {city.temp}°C {weather.map((sunny)=><p>{sunny.main}</p>)}
                    </h2>
                    <h3 className='con'>
                         country : {country.country}
                    </h3>
                    <h3 className='tempmin_max'>
                        min : {city.temp_min}°C | max : {city.temp_max}°C
                    </h3>
                </div>

            </>
        )

        }
            </div>
        </>
    )
}

export default Tempapp;