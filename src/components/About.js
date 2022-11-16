import React from 'react';
import Header, { Footer } from './Theme';

const About = () => {
    return (
        <div>
            <Header headingText='About' />

            <div className="w3-row-padding w3-padding-64 w3-container">
                <div className="w3-content">
                    <div id="v-card" className="card">
                        <div className="card-content">

                            <div className="info-headings">
                                <h4 className="text-uppercase">Sachin Bhoi</h4>
                                <h6 className="text-capitalize">FrontEnd Developer</h6>
                            </div>

                            <div className="infos">
                                <ul className="profile-list">
                                    <li className="clearfix">
                                        <span className="title"><i className="fa fa-envelope" style={{color:"#f44336"}}></i></span>
                                        <span className="content ml-10px"><a href="#">givesachin@gmail.com</a></span>
                                    </li>
                                    <li className="clearfix">
                                        <span className="title"><i className="fa fa-phone" style={{color:"#f44336"}}></i></span>
                                        <span className="content ml-10px">+918140996031</span>
                                    </li>
                                    <li className="clearfix">
                                        <span className="title"><i className="fa fa-map" style={{color:"#f44336"}}></i></span>
                                        <span className="content ml-10px">9, Amar Apartment, Vadodara</span>
                                    </li>

                                </ul>
                            </div>

                            <div className="links">
                                <a href="#" className="social btn-floating blue"><i className="fa fa-twitter"></i></a>
                                <a href="#" className="social btn-floating red ml-10px"><i className="fa fa-google-plus"></i></a>
                                <a href="#" className="social btn-floating blue darken-3 ml-10px"><i className="fa fa-linkedin"></i></a>
                                <a href="#" className="social btn-floating orange darken-3 ml-10px"><i className="fa fa-rss"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w3-row-padding w3-light-grey w3-padding-64 w3-container">
                <div className="w3-content">
                    <div className="container">
                
                        <div id="timeline-education">
                
                            <div className="timeline-block">
                               
                                <div className="card timeline-content">
                                    <div className="card-content">
                                        
                                        <h5 className="timeline-title">School</h5>
                                        
                                        <div className="timeline-info">
                                            <h6>V M Shah School, Halol, Gujarat, India</h6>
                                            <h6>till 2012</h6>
                                        </div>
                                        
                                        <p>
                                            I completed my school & high school from this institution.
                                        </p>
                                    </div>
                                </div>
                            </div>
                
                
                            <div className="timeline-block">
                              
                                <div className="card timeline-content">
                                    <div className="card-content">
                                        
                                        <h5 className="timeline-title">Computer Engineering</h5>
                                        
                                        <div className="timeline-info">
                                            <h6>Vadodara Institute of Engineering</h6>
                                            <h6>2012 - 2016</h6>
                                        </div>
                                        
                                        <p>
                                            I completed my computer engineering degree from this institution.
                                        </p>
                
                                    </div>
                                </div>
                            </div>
                
                        
                            <div className="timeline-block">
                                
                                <div className="card timeline-content">
                                    <div className="card-content">
                                        
                                        <h5 className="timeline-title">Bhasker Enterprises</h5>
                                        
                                        <div className="timeline-info">
                                            <h6>Software Developer</h6>
                                            <h6>Jan 2021 - Oct 2022</h6>
                                        </div>
                                        
                                        <p>
                                            I did my first website development experience from here.
                                        </p>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="timeline-block">
                                
                                <div className="card timeline-content">
                                    <div className="card-content">
                                        
                                        <h5 className="timeline-title">Consult Anubhav</h5>
                                        
                                        <div className="timeline-info">
                                            <h6>Software Developer</h6>
                                            <h6>Nov 2022 - Present</h6>
                                        </div>
                                        
                                        <p>
                                            I have started upgrading my career here.
                                        </p>
                                        
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;