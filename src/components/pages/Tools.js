import React from 'react';
import Header, { Footer, Navbar } from '../Theme';
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Tools = () => {

    return (
        
        <div>
            
            <Navbar />
            
            <div className='right-container'>
                
                <Header headingText='Tools' />
                
                <Container className="d-flex justify-content-center"
                    style={{ minHeight: "313px", height: "calc(100vh - 204.8px - 188.8px)" }}>
                    <ToolsDiv />
                </Container>

                <Footer />
            </div>

        </div>
    );
};

const ToolsDiv = () => {

    return (
        <div className='w3-row-padding w3-padding-64 w3-container'>
            <div className="w3-content">
                <div className="w3-twothird">
                    <NavLink to="/tools/calculator" className="custom-btn mr-3" activeClassName='custom-btn-active'>Calculator</NavLink>
                    <NavLink to="/tools/calender" className="custom-btn mr-3" activeClassName='custom-btn-active'>Calender</NavLink>
                    <NavLink to="/tools/color_palette" className="custom-btn" activeClassName='custom-btn-active'>Color&nbsp;Palette</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Tools;
export { ToolsDiv };