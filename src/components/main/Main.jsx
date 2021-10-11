import { useState, useEffect } from 'react'
import './Main.css'
import Button from '@mui/material/Button';
import { currentGeoLocation } from './../../logic/Location'
import { kelvinToCelsius, unixToActualTime } from './../../logic/Conversion'
import DisplayWeather from './DisplayWeather';

function Main() {
    const [weather, setWeather] = useState({
        weatherIcon: '',
        weatherCondition: '',
        cityName: '',
        temperature: '',
        humidity: '',
        maxTemp: '',
        minTemp: '',
        sunRise: '',
        sunSet: ''
    })
    const [city, setCity] = useState('');
    const api_key = process.env.REACT_APP_WEATHER_KEY;

    /**
     * when program starts this useEffect will set the weather 
     * to the current location.
     * such as if my location is Dhaka, Asulia so it will set the weather 
     * of Asulia
     */
    useEffect(() => {
        currentGeoLocation().then(values => {
            const latitude = values[0];
            const longitude = values[1];

            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`)
                .then(res => res.json())
                .then(data => setValues(data))
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    /**
     * on button click this will take the value of input &
     * fetch the data from api of that input
     * @param {event} e defines click event
     */
    async function handleClick(e) {
        e.preventDefault();

        if (city === '') {
            alert("Input value can't be empty")
        }
        else {
            await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
                .then(res => res.json())
                .then(data => setValues(data))
                .catch(alert('No such city exist'))
        }
    }

    /**
     * set all the values of the weather
     * @param {object} data 
     */
    function setValues(data) {
        setWeather({
            ...weather,
            weatherIcon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
            weatherCondition: data.weather[0].main,
            cityName: data.name,
            temperature: kelvinToCelsius(data.main.temp),
            humidity: data.main.humidity,
            maxTemp: kelvinToCelsius(data.main.temp_max),
            minTemp: kelvinToCelsius(data.main.temp_min),
            sunRise: unixToActualTime(data.sys.sunrise),
            sunSet: unixToActualTime(data.sys.sunset)
        })
    }

    return (
        <main>
            <div className='search-container'>
                <input
                    type="text"
                    placeholder='Enter city Name'
                    onChange={(e) => setCity(e.target.value)}
                />
                <Button
                    style={{ fontWeight: '600', color: 'white' }}
                    variant='contained'
                    onClick={(e) => handleClick(e)}
                >Enter</Button>
            </div>
            {weather.cityName !== '' ? (
                <div>
                    <DisplayWeather {...weather} />
                </div>
            ) : null}
        </main>
    );
}

export default Main;
