import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext"

function Navbar () {

    const { currentUser, logout } = useAuth();
    // let history = useHistory();

    async function handleLogout() {
    //   setError("")
  
      try {
        await logout()
        // history.push("/home")
      } catch {
        // setError("Failed to log out")
      }
    }

    return (
        <div>
            <div className="sidenav">
                <div className="w3-padding-large">&nbsp;</div>
                { currentUser && LoggedInLinks }
                { !currentUser && NotLoggedInLinks }
            </div>
            
            <div className="w3-top">

                <div className="w3-bar w3-red w3-card w3-left-align w3-large">
                    <span variant="link" className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w-red" title="Toggle Navigation Menu" onClick={ () => openNav()}><i className="fa fa-bars"></i></span>
                    { currentUser ? [
                        <NavLink to="/update-profile" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">{currentUser.email}</NavLink>,
                        <span className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white float-right" activeClassName='w3-white' onClick={handleLogout}>Log Out</span>,
                        // <span className='w3-padding-large float-right'>{currentUser.email}</span>
                    ] : [
                        <div className='w3-padding-large' style={{ display: "inline-block" }}>React Application</div>
                    ]}
                </div>
                
                <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large border">
                    { currentUser && LoggedInLinks2 }
                    { !currentUser && NotLoggedInLinks2 }
                    { currentUser && 
                        <span className="w3-bar-item w3-button w3-padding-large" onClick={handleLogout}>Logout</span>
                    }
                </div>
            </div>
        </div>
    );
};

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
                    React Application
                </h1>
            </div>
        </div>
    );
};

export default Header;
export { Footer, Navbar };

const HeaderDiv = styled.header`
    padding: 64px 16px 32px 16px;
`
const LoggedInLinks = [
    <NavLink key="0" to="/dashboard" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" activeClassName='w3-white' onClick={ () => closeNav()}>Dashboard</NavLink>,
    <NavLink key="1" to="/about" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" activeClassName='w3-white' onClick={ () => closeNav()}>About</NavLink>,
    <NavLink key="2" to="/tools" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" activeClassName='w3-white' onClick={ () => closeNav()}>Tools</NavLink>,
    <NavLink key="3" to="/references" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" activeClassName='w3-white' onClick={ () => closeNav()}>References</NavLink>,
];

const NotLoggedInLinks = [
  <NavLink key="0" to="/login" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" activeClassName='w3-white' onClick={ () => closeNav()}>Login</NavLink>,
  <NavLink key="1" to="/signup" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" activeClassName='w3-white' onClick={ () => closeNav()}>Signup</NavLink>
];

const LoggedInLinks2 = [
    <NavLink key="0" to="/dashboard" className="w3-bar-item w3-button w3-padding-large" onClick={ () => closeNav()}>Dashboard</NavLink>,
    <NavLink key="1" to="/about" className="w3-bar-item w3-button w3-padding-large" onClick={ () => closeNav()}>About</NavLink>,
    <NavLink key="2" to="/tools" className="w3-bar-item w3-button w3-padding-large" onClick={ () => closeNav()}>Tools</NavLink>,
    <NavLink key="3" to="/references" className="w3-bar-item w3-button w3-padding-large" onClick={ () => closeNav()}>References</NavLink>
];

const NotLoggedInLinks2 = [
  <NavLink key="0" to="/login" className="w3-bar-item w3-button w3-padding-large" onClick={ () => closeNav()}>Login</NavLink>,
  <NavLink key="1" to="/signup" className="w3-bar-item w3-button w3-padding-large" onClick={ () => closeNav()}>Signup</NavLink>
];

function openNav() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") === -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function closeNav() {
  var x = document.getElementById("navDemo");
  x.className = x.className.replace(" w3-show", "");
}