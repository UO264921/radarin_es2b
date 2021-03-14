import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MapView from './components/map/MapView';

class App extends React.Component {
  constructor() {
    super()
    this.state = { users: [] }
  }

  refreshUsers(users) {
    this.setState({ users: users })
  }

  render() {
    return (
      <MapView />
    )
  }
}

export default App;