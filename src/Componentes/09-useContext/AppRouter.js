import React from 'react'; 
import {
     BrowserRouter as Router,
     Switch,
     Route,
     Redirect,
     Link
   } from "react-router-dom";
import { NavBar } from '../07-tarea-memo/NavBar';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';


export const AppRouter = () => {
     return (
          <Router>
          <div>
            
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact={true} path="/" component={HomeScreen}/>
              <Route exact path="/about" component={AboutScreen}/>
              <Route exact path="/login"  component={LoginScreen}/>            
              <Redirect to="/"/>            
           
            </Switch>
            </div>
          </div>
        </Router>
     );
}

