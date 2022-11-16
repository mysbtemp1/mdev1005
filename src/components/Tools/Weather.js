import React, { useEffect, useState, useRef } from "react";
import { Footer } from '../Theme';
import moment from 'moment';
import Tools from "../Tools";

const Weather = () => {

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);
    const inputRef = useRef([]);

    let runTyping, typing = 0;

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

        GetWeatherData('current', lat, long);

    }, [lat,long]);

    async function GetWeatherData(area, lat = null, long = null)
    {
        let url = '';
        let app_id = '903507f17d707fecd352d38301efba77';

        if (!runTyping)
        {
            runTyping = setInterval(async () => {
                typing = 0;
        
                if (area == 'current')
                    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&APPID=${app_id}`;
                else
                    url = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&units=metric&APPID=${app_id}`;
            
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

        <div>
            <Tools />

            <div className="w3-row-padding w3-padding-64 w3-container w3-padding-top-20">
                <div className="w3-content">
                    <div className="w3-twothird">
                        <h1>Weather</h1>
                        <a href="#" onClick={ () => GetWeatherData('current', lat, long) }>My Location</a>
                        <br/>
                        <input ref={inputRef} onKeyUp={ () => GetWeatherData(null) } title="city" placeholder="Enter city ..." />

                        <div className="main">

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
                                ( <div>{data.message ? data.message : 'Please wait ...'}</div>)
                            }
                            
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Weather;