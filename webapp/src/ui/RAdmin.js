import React from 'react';
import CryptoJS from "crypto-js"
import {Redirect,Link } from 'react-router-dom';

export default class RAdmin extends React.Component {

  state = {
    admin: false
  }

  acceder(password) {
    var hash = CryptoJS.SHA256(password);
    hash = hash.toString(CryptoJS.enc.Base64)
    if (hash === "siHZ27CDp/M0KNfCo8MZiuklYU1wIQ4ocWzKp81N23k=") {
      console.log("admin cambiado")
      this.setState({ admin: true })
    }
  }
  render() {
    const { admin } = this.state;
    if (!admin)
      return (
        <div title="Admin">
          <div className="prueba">
            <h2 >Registrate como admin</h2>
            <input type="text" id="password" />
            <button onClick={() => this.acceder(document.getElementById("password").value)}>Acceder</button>
          </div>
          <Link to="/" >Volver</Link>
        </div>
      )
    else
      return (
        <Redirect from="/radmin" to="/administrar"></Redirect>)
  }
}