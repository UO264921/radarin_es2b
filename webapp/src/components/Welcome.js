import React from 'react';
import Perfil from "./Perfil/Perfil";

function Welcome(props) {
  return <div><Perfil name = {props}/> <h1>Hi !! </h1><span>{props.name}</span></div>;
}

export default Welcome;