//import { useNotification } from "@inrupt/solid-react-components";
/*
  import {
    NotificationContainer,
    NotificationManager,
  } from "react-notifications";
*/

// import { Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
// import FileClient from "solid-file-client";
// import DocumentTitle from "react-document-title";
// import auth from "solid-auth-client";
// import { render } from 'react-dom';
// import data from "@solid/query-ldflex";


// External dependences
import { Component } from 'react';
import { useWebId, List, Name, Link } from "@solid/react";
import Button from '@material-ui/core/Button';
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { getDefaultSession } from '@inrupt/solid-client-authn-browser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Dependences from: ~/ui/friends
import './Friends.css';

// Domain dependences
import ServicesFactory from "../../domain/ServicesFactory";

let friendsService = ServicesFactory.forFriendUsers();

class Friends extends Component {
  constructor() {
    super()
    this.state = { users: [] }
  }

  refreshUsers(users) {
    this.setState({ users: users })
  }

  render() {

    return (
      <div title="Friends">
        <div className="prueba">
          <h2>Añadir Amigos</h2>
          <div className="wrap">
            <div className="search">
              <input type="text" className="friends-webid-input" placeholder="https://pepitogarcia.solid.community/profile/card#me" id="input" />
              <button type="submit" className="searchButton" onClick={() => friendsService.addFriend(document.getElementById("input").value, getDefaultSession().info.webId)}>
                <SearchOutlinedIcon className="iconSearch" />
              </button>
            </div>
          </div>

          <br></br>
          <h2>Lista de amigos</h2>
          <List src={`[${getDefaultSession().info.webId}].friends`} className="list" padding-inline-start="0">{(friend) =>
            <li key={friend} className="listElement">
              <Card nombre={`[${friend}]`} web={getDefaultSession().info.webId}></Card>
            </li>}
          </List>

          <ToastContainer />
        </div>
      </div>
    )
  }
}

const Card = (props, webId) => {
  var user = "" + useWebId();
  return (
    <div className="card" >
      <div>
        <h4 className="amigos">
          <Name src={props.nombre}>{props.nombre}</Name>
        </h4>
        <center>
          <div className="botones">
            <Button variant="contained" className="buttoncard" id="botonOpcionP"><Link href={props.nombre} className="link" datatype="link">Profile</Link></Button>
            <Button variant="contained" className="buttoncard" id="botonOpcionD" datatype="button" onClick={() => friendsService.deleteFriend(props, user)} >Delete</Button>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Friends;