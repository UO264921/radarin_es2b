import React from 'react';
import  './Friends.css';
import FriendsService from "./FriendsService";
import { useWebId, List, Value, Name, Link } from "@solid/react";
//import { useNotification } from "@inrupt/solid-react-components";
/*import {
    NotificationContainer,
    NotificationManager,
  } from "react-notifications";
*/

import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import FileClient from "solid-file-client";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import DocumentTitle from "react-document-title";
import { getDefaultSession, Session } from '@inrupt/solid-client-authn-browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import auth from "solid-auth-client";
import { render } from 'react-dom';
import data from "@solid/query-ldflex";


class Friends extends React.Component{
  constructor(){
    super()
    this.state = {users:[]}
  }
  
  refreshUsers(users){
    this.setState({users:users})
  }

  render(){
    return(/*
      <div className="Friends">
        <h1>Nav</h1>
        <h2>Añadir Amigo</h2>
        <input type="text" id="idAmigo" placeholder="Nombre de usuario de tu amigo" />
        <button id="agregarAmigo" onClick={FriendsService.addFriend}>Agregar Amigo</button>
        <h2>Lista de amigos</h2>
      </div>*/
      <DocumentTitle title="Friends">
      <div className="prueba">
        <h2>{data[getDefaultSession().info.webId].Name}</h2>
        <h2 className="h2" data-testId="label">Tus amigos,<Value src="user.name" /> </h2>
        <h4 class="card-title" id="addFriend" data-testId="addFriend">Añade amigos con su webId</h4>
        <div class="wrap">
          <div class="search">
            <input type="text" class="searchTerm" placeholder="https://pepitogarcia.solid.community/profile/card#me" id="input" />
            <button type="submit" class="searchButton" onClick={() => FriendsService.addFriend(document.getElementById("input").value, getDefaultSession().info.webId)}>
              <SearchOutlinedIcon className="iconSearch" />
            </button>
          </div>
        </div>

        <br></br>
        <List src={`[${getDefaultSession().info.webId}].friends`} className="list" padding-inline-start="0">{(friend) =>
          <li key={friend} className="listElement">
            <p>
                <Card nombre={`[${friend}]`} web={getDefaultSession().info.webId}></Card>
            </p>
          </li>}
        </List>
        
        <ToastContainer />
      </div>
    </DocumentTitle>
    )
  }
}

const Card = (props, webId) => {
    var user = "" + useWebId();
    return (
      <div class="card bg-info text-white" >
        <div class="card-body">
          <h4 class="card-title" id="friendName">
            <Name src={props.nombre}>{props.nombre}</Name>
          </h4>
          <center>
            <div className="botones">
              <Link href={props.nombre} className="btn btn-light" id="botonOpcion" data-testId="link">Profile</Link>
              <button className="btn btn-light" id="botonOpcion" data-testId="button" onClick={() => FriendsService.deleteFriend(props, user)} >Delete</button>
              {/* onClick={() => deleteFriend(props, webId)} */}
            </div>
          </center>
        </div>
      </div>
    );
  };

export default Friends;
/*

const Friends = (props) => {
    
  const name = useWebId();

  var [amigos, setAmigos] = useState([]);
  const { createNotification, discoverInbox } = useNotification(name);

  const sendNotification = async (titles, friendId, summary) => {
    var names = name.split(".");
    var shortName = names[0];
    shortName = shortName.replace("https://", "");
    try {
      const inbox = await discoverInbox(friendId);
      if (!inbox)
        NotificationManager.error("", "notifications.inboxFail", 3000);
      createNotification(
        {
          title: titles,
          summary: shortName + summary,
          actor: name,
        },
        inbox
      );
    } catch (error) {
      NotificationManager.error("", "notifications.error", 3000);
    }
  };


  function addFriendS() {
    FriendsService.addFriend(
      document.getElementById("input-webid").value,
      name,
      "friends.added",
      "friends.empty",
      "friends.webIdF"
    ).then((ret) => {
      if (ret === 1) {
        sendNotification(
          "notifications.titleAdd",
          document.getElementById("input-webid").value,
          "notifications.summaryAdd"
        );
        NotificationManager.error("", "friends.addeds", 3000);
      }
    });
  }

  const refresh = async () => {
    var friends = [];
    friends = await FriendsService.getFriends();
    friends.forEach(function (friend) {
      if (amigos.includes(friend.toString()) === false)
        setAmigos((amigos) => [...amigos, friend]);
    });
    setAmigos(friends);
  };

  const style = {
    listStyleType: "none",
  };

  return (
    <DivStyle1>
      <ListaDiv onLoad={refresh}>
        <H3Style>{"friends.addFriend"}</H3Style>
        <InputStyle
          type="text"
          placeholder="https://marshall.solid.community/profile/card#me"
          data-testid="input-webid"
          id="input-webid"
        />
        <ButtonStyle3 onClick={refresh} id="refresh-button">
          {" "}
          <img
            src={process.env.PUBLIC_URL + "/img/icon/refresh.svg"}
            width="25"
            height="20"
            alt=""
          />{"map.refreshf"}
        </ButtonStyle3>
        <ButtonStyle2
          onClick={addFriendS}
          data-testid="add-friend-button"
          id="add-friend-button"
          className="send"
        >
          <img
            src={process.env.PUBLIC_URL + "/img/icon/arrow.svg"}
            width="25"
            height="20"
            alt=""
          />
          {"friends.addFriend"}
        </ButtonStyle2>

        <H3Style>{"friends.myFriends"}</H3Style>
        <AmigosDiv id="lista" className="lista">
          {amigos.map((item) => (
            <li style={style}>
              <input name="food" type="radio" value={item} id="radio"></input>
              {item}
            </li>
          ))}
        </AmigosDiv>
        <ButtonStyle
          id="removeFriend-button"
          data-testid="remove-button"
          onClick={(event) =>
            AddFriend.removeFriend(
              event,
              name,
              "friends.deleted",
              "friends.choose"
            )
          }
        >
          <img
            src={process.env.PUBLIC_URL + "/img/icon/rubbish.svg"}
            width="35"
            height="35"
            alt=""
          />
          {"friends.remove"}
        </ButtonStyle>
        <NotificationContainer />
      </ListaDiv>
    </DivStyle1>
  );
};

export default Friends;
*/