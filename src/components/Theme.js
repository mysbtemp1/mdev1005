import React from 'react';
import styled from 'styled-components';

const Header = ({headingText}) => {
    return (
        <HeaderDiv className="w3-container w3-red w3-center">
            <h1 className="w3-margin w3-jumbo">{headingText}</h1>
        </HeaderDiv>
    );
};

const Footer = () => {
    return (
        <div>
            <div className="w3-container w3-black w3-center w3-opacity w3-padding-64">
                <h1 className="w3-margin w3-xlarge">
                    ReactJS Application
                </h1>
            </div>
        </div>
    );
};

export default Header;
export { Footer };

const HeaderDiv = styled.header`
    padding: 64px 16px 32px 16px;
`