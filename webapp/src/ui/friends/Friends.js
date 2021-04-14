import React from 'react';
import './Friends.css';
import { useWebId, List, Name, Link } from "@solid/react";
import Button from '@material-ui/core/Button';
import { useEffect} from 'react';


import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { getDefaultSession } from '@inrupt/solid-client-authn-browser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useInterval } from '../../util/hooks/UseInterval';


// Dependences from: ~/ui/friends
import './Friends.css';


// Domain dependences
import ServicesFactory from "../../domain/ServicesFactory";

let FriendsService = ServicesFactory.forFriendUsers();

class Friends extends React.Component {
  constructor() {
    super()
    this.state = { users: [],peticionesCompletadas:[], getPeticionesPendientes:[] }
  }

  refreshUsers(users) {
    this.setState({ users: users })
  }
  

  async listarPeticionesCompletadas(){
    
  }
  async listarPeticionesPendientes(){
    var list=" "
    var peticiones=await FriendsService.getPeticionesPendientes(getDefaultSession().info.webId);
    peticiones.forEach((peticion) => {
      list+='<div className="card" ><div><h4 className="peticiones"><Name src='+peticion.nombreUsuario+'>'+peticion.nombreUsuario+'</Name></h4>'+
          '<center><div className="botones">'+
          '<Button variant="contained" className="buttoncard" id="botonOpcionA" datatype="button" onClick={() =>'+ FriendsService.aceptFriendRequest(peticion.webid,getDefaultSession().info.webId)+'} >Aceptar</Button>'+
          '<Button variant="contained" className="buttoncard" id="botonOpcionE" datatype="button" onClick={() =>'+ FriendsService.deleteFriendRequest(peticion.webid,getDefaultSession().info.webId) +'}>Eliminar</Button>'+
          '</div></center></div></div>';
        console.log(peticion.nombreUsuario);
    })
    console.log("listado")
    console.log(list)
    var lista=document.getElementById("pendientes")
   lista.innerHTML=list;
  }
  
  render() {
    return (
      <div title="Friends">
        <div className="prueba">
          <h2>Añadir Amigos</h2>
          <div className="wrap">
            <div className="search">
              <input type="text" className="friends-webid-input" placeholder="pepito" id="input" />
              <button type="submit" className="searchButton" onClick={() => FriendsService.addFriendRequestService(document.getElementById("input").value, getDefaultSession().info.webId)}>
                <SearchOutlinedIcon className="iconSearch" />
              </button>
            </div>
          </div>
          <br></br>
          <h2>Lista de peticiones de amistad</h2>
          <div id="completadas" className="list" padding-inline-start="0">
          </div>
          <br></br>
          <div id="pendientes" className="list" padding-inline-start="0">
          </div>
          <br></br>
          <h2>Lista de amigos</h2>
          <List src={`[${getDefaultSession().info.webId}].friends`} className="list" padding-inline-start="0">{(friend) =>
            <li key={friend} className="listElement">
              <Card nombre={`${friend}`} web={getDefaultSession().info.webId}></Card>
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
            <Button variant="contained" className="buttoncard" id="botonOpcionD" datatype="button" onClick={() => FriendsService.deleteFriend(props, user)} >Delete</Button>
          </div>
        </center>
      </div>
    </div>
  );
};
const RequestCard = (props, webId) => {
  var user = "" + webId;
  return (
    <div className="card" >
      <div>
        <h4 className="peticiones">
          <Name src={props.nombre.nombreUsuario}>{props.nombre.nombreUsuario}</Name>
        </h4>
        <center>
          <div className="botones">
          <Button variant="contained" className="buttoncard" id="botonOpcionA" datatype="button" onClick={() => FriendsService.aceptFriendRequest(props.webid,getDefaultSession().info.webId)} >Aceptar</Button>
          <Button variant="contained" className="buttoncard" id="botonOpcionE" datatype="button" onClick={() => FriendsService.deleteFriendRequest(props,user)} >Eliminar</Button>
          </div>
        </center>
      </div>
    </div>
  );
};
const ConfirmRequestCard = (props, webId) => {
  var user = "" + useWebId();
  return (
    <div className="card" >
      <div>
        <h4 className="peticiones">
          <Name src={props.nombre}>{props.nombre}</Name>
        </h4>
        <center>
          <div className="botones">
          <Button variant="contained" className="buttoncard" id="botonOpcionC" datatype="button" onClick={() => FriendsService.confirmFriendRequest(props,user)} >Confirmar</Button>
          </div>
        </center>
      </div>
    </div>
  );
};


export default Friends;