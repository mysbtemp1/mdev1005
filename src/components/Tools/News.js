import React, { useEffect, useState, useRef } from "react";
import Header, { Footer, Navbar } from '../Theme';
import { Container, Card } from 'react-bootstrap';
import { ToolsDiv } from "../pages/Tools";

const News = () => {

    const [ data, setFlag ] = useState([]);

    useEffect(() => {

        GetFinanceData();

    }, []);

    async function GetFinanceData()
    {
        let url = '';
        let app_id = '5288d41806a24c749a16507428f14dd3';
    
        url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${app_id}`;
    
        await fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(result => {
            setFlag(result.articles.slice(0,5));
        });
    }

    return (

        <div>
                    <Card>
                        <Card.Body>
                            <div>
                                <h1>Latest News Feed</h1>
                                <br/>
                                <ul>
                                    { data.map( row => 
                                        (
                                            <li>
                                                <h5>{row.title}</h5>
                                                <p>
                                                    {row.content}
                                                    <div className="float-right"> - {row.author}</div>
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

export default News;