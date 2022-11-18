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

                    <Card>
                      <Card.Body>
                        <div>
                        <ColorPicker width={200} height={200} color={color} onChange={setColor} hideHSV dark />
                        </div>
                      </Card.Body>
                    </Card>
        </div>
    );
};

export default ColorPalette;