import React, { useState } from "react"
import './App.css';
import Signup from "./components/auth/Signup"
import { useAuth, AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Login from "./components/auth/Login"
import PrivateRoute from "./components/auth/PrivateRoute"
import NewUserRoute from "./components/auth/NewUserRoute";
import UpdateProfile from "./components/pages/UpdateProfile"

import Dashboard from "./components/pages/Dashboard"
import About from "./components/pages/About"
import Tools from "./components/pages/Tools"
import Calculator from "./components/tools/Calculator";
import CalendarTool from "./components/tools/Calendar";
import News from "./components/tools/News";
import References from "./components/pages/References"
import NotFound from "./components/pages/NotFound";
import { globalState, globalStateContext } from "./contexts/AppContext";
import { ColorPicker, useColor } from "react-color-palette";

function App() {
  
  // let [ colorBtnClass, setColorBtn ] = useState(['d-none']);
  // const { currentUser, logout } = useAuth();
  // const [color, setColor] = useColor("hex", globalState.new_theme_color);
  // let theme = themeFunc();
  globalState.new_theme_color = '#f44336';

  // function setNewColor(any_color) {
  //     setColor(any_color);
  //     globalState.new_theme_color = any_color.hex;
  // }

  // function openColorPalette() {
  //     setColorBtn('d-block');
  // }

  // function closeColorPalette() {
  //     setColorBtn('d-none');
  // }

  return (
      <globalStateContext.Provider value={globalState}>

        {/* { currentUser &&  */}
            {/* <div>
                <div className={`color-picker-custom ${colorBtnClass}`}>
                    <div className='text-right p-1 font-24' onClick={closeColorPalette}>X</div>
                    <div className=' color-picker-box' style={{boxShadow: `0 0 10px 0 ${globalState.new_theme_color}, 0 0 10px 0 ${globalState.new_theme_color}`}}>
                       
                            <ColorPicker width={250} height={200} color={color} onChange={setNewColor} hideHSV hideHEX hideRGB dark/>
                        
                    </div>
                </div>

                <div className='color-picker-toggle' onClick={openColorPalette}>
                    Color Palette
                </div>
            </div> */}
        {/* } */}

        <Router>
          <AuthProvider>
            <Switch>
              <Redirect path="/" exact={true} to="/dashboard" />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <NewUserRoute path="/signup" component={Signup} />
              <NewUserRoute path="/login" component={Login} />
              
              <PrivateRoute path="/about" component={About} />
              <PrivateRoute path="/references" component={References} />
              <PrivateRoute path="/tools" exact={true} component={Tools} />
              <PrivateRoute path="/tools/calculator" component={Calculator} />
              <PrivateRoute path="/tools/calender" component={CalendarTool} />
              <PrivateRoute path="/tools/news" component={News} />
              <Route from='*' exact={true} component={NotFound} />
            </Switch>
          </AuthProvider>
        </Router>
      </globalStateContext.Provider>
  )
}

export default App
