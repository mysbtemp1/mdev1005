import React, { useState } from "react";
import Calendar from 'react-calendar';
import { ToolsDiv } from '../pages/Tools';
import { Container, Card } from 'react-bootstrap';
import Header, { Footer, Navbar } from '../Theme';
import 'react-calendar/dist/Calendar.css';

const CalendarTool = () => {
    const [value, onChange] = useState(new Date());
  
    return (

        <div>  
            <Navbar />

            <div className='right-container'>
                <Header headingText='Calendar' />
                
                <Container className="d-flex justify-content-center">
                    <ToolsDiv />
                </Container>
                
                <Container className="d-flex justify-content-center"
                    style={{ minHeight: "407px", paddingBottom: "25px" }}>

                    <Card>
                      <Card.Body>
                        <div>
                            <Calendar onChange={onChange} value={value} />
                        </div>
                      </Card.Body>
                    </Card>

                    
                </Container>

                <Footer />
            </div>
        </div>
    );
};

export default CalendarTool;