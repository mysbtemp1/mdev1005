import React, { useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import { ToolsDiv } from '../pages/Tools';
import { Container, Card } from 'react-bootstrap';
import Header, { Footer, Navbar } from '../Theme';
import "react-color-palette/lib/css/styles.css";

const ColorPalette = () => {
    
    const [color, setColor] = useColor("hex", "#121212");
  
    return (

        <div>  
            <Navbar />

            <div className='right-container'>
                <Header headingText='Color Palette' />
                
                <Container className="d-flex justify-content-center">
                    <ToolsDiv />
                </Container>
                
                <Container className="d-flex justify-content-center"
                    style={{ minHeight: "407px", paddingBottom: "25px" }}>

                    <Card>
                      <Card.Body>
                        <div>
                        <ColorPicker width={456} height={228} color={color} onChange={setColor} hideHSV dark />
                        </div>
                      </Card.Body>
                    </Card>

                    
                </Container>

                <Footer />
            </div>
        </div>
    );
};

export default ColorPalette;