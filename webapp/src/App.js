import React, { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import LogIn from './components/LogIn/LogIn';
import { SessionContext, SessionProvider} from "@inrupt/solid-ui-react";
import MNavBar from './components/NavBar/MNavBar';
import MainPage from './components/Main/MainPage';
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { getDefaultSession, Session } from '@inrupt/solid-client-authn-browser';
import { useSession } from "@inrupt/solid-ui-react/dist";

class App extends React.Component {
  
  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <MNavBar />
          </header>
          <br /><br /><br /><br /><br /><br />
          <Switch>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/">
              <div>
                <MainPage />
              </div>
            </Route>
          </Switch>
        </div>

      </BrowserRouter>
    );
  }



}

export default App;