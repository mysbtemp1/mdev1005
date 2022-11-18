import React, { useEffect, useState, useRef } from "react";
import Header, { Footer, Navbar } from '../Theme';
import { Container, Card } from 'react-bootstrap';
import moment from 'moment';
import { ToolsDiv } from "../pages/Tools";

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
            <Navbar />

            <div className='right-container'>
                <Header headingText='Weather' />
                
                <Container className="d-flex justify-content-center">
                    <ToolsDiv />
                </Container>
                
                <Container className="d-flex justify-content-center"
                    style={{ minHeight: "450px", paddingBottom: "25px" }}>
                        
                    <Card>
                        <Card.Body>

                            <a href="#" onClick={ () => GetWeatherData('current', lat, long) }>My Location</a>
                                
                            <input ref={inputRef} onKeyUp={ () => GetWeatherData(null) } title="city" placeholder="Enter city ..." />

                            <div>

                                {data.cod == 200 ?
                                    (
                                        <div>
                                            <div className="top">
                                                <p className="header">{data.name}</p>
                                            </div>
                                            <div>
                                                <div className="day" style={{display: "inline-block"}}>{moment().format('dddd')}, <span>{moment().format('LL')}</span></div>
                                                <div className="description" style={{display: "inline-block"}}>{data.weather[0].main}</div>
                                            </div>
                                
                                            <div>
                                                <p className="temp" style={{display: "inline-block"}}>Temprature: {data.main.temp} &deg;C</p>
                                                <p className="temp" style={{display: "inline-block"}}>Humidity: {data.main.humidity} %</p>
                                            </div>
                                
                                            <div>
                                                <p className="sunrise-sunset" style={{display: "inline-block"}}>Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                                                <p className="sunrise-sunset" style={{display: "inline-block"}}>Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                                            </div>
                                        </div>
                                    ) :
                                    ( <div>{data.message ? data.message : 'Please wait ...'}</div>)
                                }
                                
                            </div>
                        </Card.Body>
                    </Card>
                </Container>

                <Footer />
            </div>
        </div>
    );
};

export default Weather;