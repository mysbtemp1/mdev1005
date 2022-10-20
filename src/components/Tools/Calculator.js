import React from 'react';
import {Link} from 'react-router-dom';

function calc(e)
{
    let display = document.getElementById("inputs");
    
    switch (e.target.value) 
    {
        case "C":
            display.innerText = "";
            break;
        case "=":
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = "Error";
            }
            break;
    
        default:
            display.innerText += e.target.innerText;
    }
}

const Calculator = () => {
    
    return (
        <div className='container'>
            <h1 className='ml-3 mt-3'>Calculator</h1>
            <div>
                <div type="text" id="inputs"></div>
            </div>
            <div className="buttons">
                <div className="keypadj">
                    <div className="keypadi">
                        <button className="button" value='+' onClick={(event) => calc(event)}>+</button>
                        <button className="button" value='-' onClick={(event) => calc(event)}>-</button>
                        <button className="button" value='*' onClick={(event) => calc(event)}>*</button>
                        <button className="button" value='/' onClick={(event) => calc(event)}>/</button>
                    </div>

                    <div className="keypadi">
                        <button className="button" value='7' onClick={(event) => calc(event)}>7</button>
                        <button className="button" value='4' onClick={(event) => calc(event)}>4</button>
                        <button className="button" value='1' onClick={(event) => calc(event)}>1</button>
                        <button className="button" value='0' onClick={(event) => calc(event)}>0</button>
                    </div>

                    <div className="keypadi">
                        <button className="button" value='8' onClick={(event) => calc(event)}>8</button>
                        <button className="button" value='5' onClick={(event) => calc(event)}>5</button>
                        <button className="button" value='2' onClick={(event) => calc(event)}>2</button>
                        <button className="button" value='.' onClick={(event) => calc(event)}>.</button>
                    </div>

                    <div className="keypadi">
                        <button className="button" value='9' onClick={(event) => calc(event)}>9</button>
                        <button className="button" value='6' onClick={(event) => calc(event)}>6</button>
                        <button className="button" value='3' onClick={(event) => calc(event)}>3</button>
                        <button className="button" value='C' onClick={(event) => calc(event)} id="clear">C</button>
                    </div>

                    <div className="keypadi">
                        <button id="equal" className="button" value='=' onClick={(event) => calc(event)}>=</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;