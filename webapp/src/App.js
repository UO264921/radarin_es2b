import './App.css';
import { SessionContext, SessionProvider} from "@inrupt/solid-ui-react";
import { useState} from "react";
import LogIn from "./components/LogIn/LogIn"
import { useSession } from "@inrupt/solid-ui-react/dist";
import Welcome from './components/Welcome';
import { getDefaultSession, Session } from '@inrupt/solid-client-authn-browser';
import Friends from './components/Friends/Friends';
import data from "@solid/query-ldflex";



const App = () => {

  //We use this state variable
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //With this we can control the login status for solid
  const { session } = useSession();

  //We have logged in
  session.onLogin(()=>{
    setIsLoggedIn(true)
  })

  //We have logged out
  session.onLogout(()=>{
    setIsLoggedIn(false)
  })
  
  return(
    <SessionProvider sessionId="log-in-example">
      {(!isLoggedIn) ? <LogIn/> : <Friends/>} 
    </SessionProvider>
  )
}
//<Welcome name={getDefaultSession().info.webId}/>
export default App;