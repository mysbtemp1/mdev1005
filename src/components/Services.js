import React from 'react';
import { Link } from 'react-router-dom';
import Header, { Footer } from './Theme';

const Services = () => {
    return (
        <div>
            <Header headingText='Services' />
            
            <div className="w3-row-padding w3-padding-64 w3-container">
                <div className="w3-content">
                    <div className="w3-twothird">
                        <h1>References</h1>
                        <ul>
                            <li>
                                <Link to="https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_start_page">https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_start_page</Link>
                            </li>
                            <li>
                                <Link to="https://v5.reactrouter.com/web/guides/quick-start">https://v5.reactrouter.com/web/guides/quick-start</Link>
                            </li>
                            <li>
                                <Link to="https://medium.com/@ipenywis/intro-to-react-router-for-beginners-multiple-page-apps-461f4729bd3f">https://medium.com/@ipenywis/intro-to-react-router-for-beginners-multiple-page-apps-461f4729bd3f</Link>
                            </li>
                            <li>
                                <Link to="https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/">https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/</Link>
                            </li>
                            <li>
                                <Link to="https://api.openweathermap.org/data/2.5/weather?q=vadodara&APPID=903507f17d707fecd352d38301efba77">https://api.openweathermap.org/data/2.5/weather?q=vadodara&APPID=903507f17d707fecd352d38301efba77</Link>
                            </li>
                            <li>
                                <Link to="https://www.freecodecamp.org/news/learn-react-by-building-a-weather-app/">https://www.freecodecamp.org/news/learn-react-by-building-a-weather-app/</Link>
                            </li>
                            <li>
                                <Link to="https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom">https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom</Link>
                            </li>
                            <li>
                                <Link to="https://bobbyhadz.com/blog/react-export-switch-imported-as-switch-not-found">https://bobbyhadz.com/blog/react-export-switch-imported-as-switch-not-found</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Services;