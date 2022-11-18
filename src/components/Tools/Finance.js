import React, { useEffect, useState, useRef } from "react";
import Header, { Footer, Navbar } from '../Theme';
import { Container, Card } from 'react-bootstrap';
import moment from 'moment';
import { ToolsDiv } from "../pages/Tools";

const Finance = () => {

    const [ data, setData ] = useState([]);

    useEffect(() => {

        GetFinanceData();

    }, []);

    async function GetFinanceData()
    {
        let url = '';
        let app_id = '433fe75a22056f72b4e335b0627761a8';
    
        url = `https://financialmodelingprep.com/api/v3/stock/list?apikey=${app_id}`;
    
        await fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(result => {
           setData(result.slice(0,10));
        });
    }

    return (

        <div>
                        
                    <Card>
                        <Card.Body>
                            <div>
                                <h1>Financial Information</h1>
                                <br/>
                                <ul>
                                    { data.map( row => 
                                        (
                                            <li>
                                                <h5>{row.name}</h5>
                                                <p>
                                                    {row.exchange}
                                                    <div className="float-right">{row.symbol} - {row.price}</div>
                                                </p>
                                            </li>
                                        ))
                                    }
                                </ul>
                                
                            </div>
                        </Card.Body>
                    </Card>
        </div>
    );
};

export default Finance;