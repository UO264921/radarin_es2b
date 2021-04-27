import React from 'react';

class RAdmin extends React.Component {

  async acceder(password){
    if(password==="hola"){
      let url=window.location.toString()
      url=url.replace("radmin","administrar")
      window.location.href =url;
    }
  }

  render() {
    return (
      <div title="Admin">
        <div className="prueba">
          <h2>Registrate como admin</h2>
            <input type="text" id="password" />
            <button onClick={()=>this.acceder(document.getElementById("password").value)}>Acceder</button>
        </div>
        <button ><a href="/login" >Volver</a></button>
      </div>
    )
  }
}



export default RAdmin;