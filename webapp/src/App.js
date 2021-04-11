import React, { useState } from 'react';
import './App.css';
import LogIn from './components/logIn/LogIn.js';
import {CombinedDataProvider, } from "@inrupt/solid-ui-react";
import MNavBar from './components/NavBar/MNavBar';
import MainPage from './components/Main/MainPage';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSession } from "@inrupt/solid-ui-react/dist";
import MapView from './components/map/MapView';
import Friends from './components/Friends/Friends';
import Perfil from './components/Perfil/Perfil';
import About from './components/About/About';
import { getDefaultSession } from '@inrupt/solid-client-authn-browser';

function App(props) {
  //We use this state variable
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //With this we can control the login status for solid
  const { session } = useSession();

  //We have logged in
  session.onLogin(() => {
    setIsLoggedIn(true)
  })

  //We have logged out
  session.onLogout(() => {
    setIsLoggedIn(false)
  })
  
 
  return (
      <BrowserRouter>
        <div className="App">
          <header>
            <MNavBar />
          </header>
          <div style={{ height: "60px" }}>
          </div>
          {(!isLoggedIn) ? <LogIn/> : 
          <Switch>
            <Route path="/login">
              <MapView />
            </Route>
            <Route path="/perfil">
            <Perfil />
            </Route>
            <Route path="/amigos">
              <Friends />
            </Route>
            <Route path="/mapa">
              <MapView />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <div>
                <MapView />
              </div>
            </Route>
          </Switch>}
          </div>
      </BrowserRouter>
  );
}
//<Welcome name={getDefaultSession().info.webId} />

export default App;