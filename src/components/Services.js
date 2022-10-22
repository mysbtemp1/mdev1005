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
                                <a href="https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_start_page" target={'_blank'}>https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_start_page</a>
                            </li>
                            <li>
                                <a href="https://v5.reactrouter.com/web/guides/quick-start" target={'_blank'}>https://v5.reactrouter.com/web/guides/quick-start</a>
                            </li>
                            <li>
                                <a href="https://medium.com/@ipenywis/intro-to-react-router-for-beginners-multiple-page-apps-461f4729bd3f" target={'_blank'}>https://medium.com/@ipenywis/intro-to-react-router-for-beginners-multiple-page-apps-461f4729bd3f</a>
                            </li>
                            <li>
                                <a href="https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/" target={'_blank'}>https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/</a>
                            </li>
                            <li>
                                <a href="https://api.openweathermap.org/data/2.5/weather?q=vadodara&APPID=903507f17d707fecd352d38301efba77" target={'_blank'}>https://api.openweathermap.org/data/2.5/weather?q=vadodara&APPID=903507f17d707fecd352d38301efba77</a>
                            </li>
                            <li>
                                <a href="https://www.freecodecamp.org/news/learn-react-by-building-a-weather-app/" target={'_blank'}>https://www.freecodecamp.org/news/learn-react-by-building-a-weather-app/</a>
                            </li>
                            <li>
                                <a href="https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom" target={'_blank'}>https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom</a>
                            </li>
                            <li>
                                <a href="https://bobbyhadz.com/blog/react-export-switch-imported-as-switch-not-found" target={'_blank'}>https://bobbyhadz.com/blog/react-export-switch-imported-as-switch-not-found</a>
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