// External dependences
import React, { useState } from 'react';
import { SessionProvider } from "@inrupt/solid-ui-react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { useSession } from "@inrupt/solid-ui-react/dist";
import "bootstrap/dist/css/bootstrap.min.css";

// Dependences from: ~/ui
import './App.css';
import About from './ui/about/About';
import Friends from './ui/friends/Friends';
import LogIn from './ui/logIn/LogIn';
import MapView from './ui/map/MapView';
import MNavBar from './ui/navBar/MNavBar';
import PlaceholderPage from './ui/placeholderPage/PlaceholderPage';
import Profile from './ui/profile/Profile';

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

  // <Welcome name={getDefaultSession().info.webId}/>}
  return (
    <SessionProvider sessionId="log-in-example">
      <BrowserRouter>
        <div className="App">
          <header>
            <MNavBar />
          </header>
          <div style={{ height: "60px" }}>
          </div>
          <Switch>
            <Route path="/login">
              {(!isLoggedIn) ? <LogIn /> : <MapView />}
            </Route>
            <Route path="/perfil">
              {(!isLoggedIn) ? <LogIn /> : <Profile />}
            </Route>
            <Route path="/amigos">
              {(!isLoggedIn) ? <LogIn /> : <Friends />}
            </Route>
            <Route path="/mapa">
              {(!isLoggedIn) ? <LogIn /> : <MapView />}
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <div>
                {(!isLoggedIn) ? <PlaceholderPage /> : <MapView />}
              </div>
            </Route>
            <Route path="/friends">
              <div>
                <Friends />
              </div>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </SessionProvider>
  );
}
//<Welcome name={getDefaultSession().info.webId} />

export default App;