import React from "react"
import './App.css';
import Signup from "./components/auth/Signup"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Dashboard from "./components/pages/Dashboard"
import Login from "./components/auth/Login"
import PrivateRoute from "./components/auth/PrivateRoute"
// import ForgotPassword from "./components/auth/ForgotPassword"
import UpdateProfile from "./components/pages/UpdateProfile"

import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Tools from "./components/pages/Tools"
import Calculator from "./components/tools/Calculator";
import Weather from "./components/tools/Weather"
import References from "./components/pages/References"
import NotFound from "./components/pages/NotFound";

function App() {
  return (
        <Router>
          <AuthProvider>
            <Switch>
              <Redirect path="/" exact={true} to="/home" />
              <PrivateRoute path="/home" component={Home} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              {/* <Route path="/forgot-password" component={ForgotPassword} /> */}
              
              <PrivateRoute path="/about" component={About} />
              <PrivateRoute path="/references" component={References} />
              <PrivateRoute path="/tools" exact={true} component={Tools} />
              <PrivateRoute path="/tools/calculator" component={Calculator} />
              <PrivateRoute path="/tools/weather" component={Weather} />
              <Route from='*' exact={true} component={NotFound} />
            </Switch>
          </AuthProvider>
        </Router>
  )
}

export default App
