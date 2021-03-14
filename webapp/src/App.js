import { SessionProvider, useSession } from "@inrupt/solid-ui-react";
// import { getDefaultSession } from '@inrupt/solid-client-authn-browser';
import { useState } from "react";
import LogIn from "./components/LogIn/LogIn"
// import Welcome from './components/Welcome';
import MapView from './components/map/MapView';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
      {(!isLoggedIn) ? <LogIn /> : <MapView />}
    </SessionProvider>
  )
}

export default App;