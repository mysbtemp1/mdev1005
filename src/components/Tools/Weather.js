import React, { useEffect, useState } from "react";
import moment from 'moment';

const Weather = () => {

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);
    let runTyping, typing = 0, message;

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });
        }

        fetchData()
        .then()
        .catch(error => {
            let new_data = {};

            new_data.cod = 404;
            new_data.message = 'Please allow location permission to load weather data.';

            setData(new_data);
        });

    }, [lat,long]);

    async function GetWeatherData(area, lat = null, long = null)
    {
        let url = '';

        if (!runTyping)
        {
            runTyping = setInterval(async () => {
                typing = 0;
        
                if (area == 'current')
                    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&APPID=903507f17d707fecd352d38301efba77`;
                else
                    url = `https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById("search").value}&units=metric&APPID=903507f17d707fecd352d38301efba77`;
            
                await fetch(url)
                .then(function(response){
                    return response.json();
                })
                .then(result => {
                    setData(result);
                });
        
                clearTimeout(runTyping);
            }, 2000)
        }
    }

    return (
        <div className='container'>
            <div className='ml-3 mt-3 pb-3'>
                <h1>Weather Application</h1>
                <a href="#" onClick={ () => GetWeatherData('current', lat, long) }>My Location</a>
                <br/>
                <input id="search" onKeyUp={ () => GetWeatherData(null) } />
            </div>

            <div className="main ml-3">

                {data.cod == 200 ?
                    (
                        <div>
                            <div className="top">
                                <p className="header">{data.name}</p>
                            </div>
                            <div className="flex">
                                <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
                                <p className="description">{data.weather[0].main}</p>
                            </div>
                
                            <div className="flex">
                                <p className="temp">Temprature: {data.main.temp} &deg;C</p>
                                <p className="temp">Humidity: {data.main.humidity} %</p>
                            </div>
                
                            <div className="flex">
                                <p className="sunrise-sunset">Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                                <p className="sunrise-sunset">Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                            </div>
                        </div>
                    ) :
                    ( <div className="px-3">{data.message}</div>)
                }
                
            </div>
        </div>
    );
};

export default Weather;