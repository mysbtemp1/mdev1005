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
                                <h4 className="text-uppercase">Darshita Patel</h4>
                                <h6 className="text-capitalize">Mobile Application Developer</h6>
                            </div>

                            <div className="infos">
                                <ul className="profile-list">
                                    <li className="clearfix">
                                        <span className="title"><i className="fa fa-envelope" style={{color:"#f44336"}}></i></span>
                                        <span className="content ml-10px"><a href="#">d154patel@gmail.com</a></span>
                                    </li>
                                    <li className="clearfix">
                                        <span className="title"><i className="fa fa-globe" style={{color:"#f44336"}}></i></span>
                                        <span className="content ml-10px">www.darshita.tech</span>
                                    </li>
                                    <li className="clearfix">
                                        <span className="title"><i className="fa fa-linkedin" style={{color:"#f44336"}}></i></span>
                                        <span className="content ml-10px"><a href="#">darshita-patel-89b06b1a9</a></span>
                                    </li>
                                    <li className="clearfix">
                                        <span className="title"><i className="fa fa-phone" style={{color:"#f44336"}}></i></span>
                                        <span className="content ml-10px">+1(249) 989 2982</span>
                                    </li>
                                    <li className="clearfix">
                                        <span className="title"><i className="fa fa-map" style={{color:"#f44336"}}></i></span>
                                        <span className="content ml-10px">368, Dunsmore Ln, Barrie L4M 7B1</span>
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
                                       
                                        <h5 className="timeline-title">Preparatory Education</h5>
                                        
                                        <div>
                                            <h6>Shri J.S.Mehta School,Dhansura,India</h6>
                                            <h6>Jan 2003 - Mar 2006</h6>
                                        </div>
                                        
                                        <p>
                                            I completed my preparatory education from this Government School.
                                            I successful completed all the credits without any fallout and got A+ grade overall.
                                        </p>
                                        
                                    </div>
                                </div>
                            </div>
                
                            <div className="timeline-block">
                               
                                <div className="card timeline-content">
                                    <div className="card-content">
                                        
                                        <h5 className="timeline-title">High School</h5>
                                        
                                        <div className="timeline-info">
                                            <h6>R.S.V.G.Patel School, India</h6>
                                            <h6>Aug 2006 - Mar 2016</h6>
                                        </div>
                                        
                                        <p>
                                            I completed my high school degree from this prestigious institution.
                                            I successful completed all the credits without any fallout and got A grade overall.
                                        </p>
                                    </div>
                                </div>
                            </div>
                
                
                            <div className="timeline-block">
                              
                                <div className="card timeline-content">
                                    <div className="card-content">
                                        
                                        <h5 className="timeline-title">Computer Science &amp; Engineering</h5>
                                        
                                        <div className="timeline-info">
                                            <h6>Parul University</h6>
                                            <h6>Aug 2016 - May 2020</h6>
                                        </div>
                                        
                                        <p>
                                            I completed my computer science degree from this prestigious institution.
                                            I successful completed all the credits without any fallout and got A grade overall.
                                        </p>
                
                                    </div>
                                </div>
                            </div>
                
                        
                            <div className="timeline-block">
                                
                                <div className="card timeline-content">
                                    <div className="card-content">
                                        
                                        <h5 className="timeline-title">Georgian College</h5>
                                        
                                        <div className="timeline-info">
                                            <h6>Mobile Application development</h6>
                                            <h6>May 2022 - Present</h6>
                                        </div>
                                        
                                        <p>
                                            I recently studing this college.
                                            I learning new things about the how to built Mobile Application.
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