import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import LogIn from './components/LogIn/LogIn';
import EmailForm from "./components/EmailForm";
import UserList from "./components/UserList";
import MNavBar from './components/NavBar/MNavBar';
import MainPage from './components/Main/MainPage';
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {

  constructor(){
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
              {this.main2()}
            </Route>
          </Switch>
        </div>
      
      </BrowserRouter>
    );
  }

  main() {
    return (
      <div className="App-content">
        <Welcome name="ASW students" />
        <EmailForm refreshUsers={this.refreshUsers.bind(this)} />
        <UserList users={this.state.users} />
        <a className="App-link"
          href="https://github.com/pglez82/radarin_0"
          target="_blank"
          rel="noopener noreferrer">Source code</a>
      </div>
    );
  }

  main2() {
    return (<div>
      <MainPage />
      </div>
    );
  }
}

export default App;