import React,{useEffect, useState, useCallback} from "react"
import {
  useSession,
  CombinedDataProvider,
  Image,
  LogoutButton,
  Text,
} from "@inrupt/solid-ui-react";
import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Typography,
} from "@material-ui/core";
import { FOAF, VCARD } from "@inrupt/lit-generated-vocab-common";
import { modificarNombreUsuario,getUsernameByWebId } from "../../api/api";
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";


// Dependences from: ~/ui/profile
import "./profile.css";

const Profile = () => {
  const { session } = useSession();
  const { webId } = session.info;
  const [nombre,setNombre] = useState(null);

  var getUserName=useCallback(async function(){
     getUsernameByWebId(webId).then(user=>{
       setNombre(user.nombreUsuario);
     }).catch(err=>console.log(err));
  },[setNombre,webId]);

  useEffect(()=>{
    getUserName();
  },[getUserName]);

  return (
    <Container className="fixed">
      <CombinedDataProvider datasetUrl={webId} thingUrl={webId}>
        <Card className="card">
          <Typography>
            <span className="miPerfil">Mi Perfil</span>
          </Typography>
          <CardActionArea>
            <Image className="perfil" property={VCARD.hasPhoto.iri.value} />
          </CardActionArea>
          <hr />
          <CardContent>
            <Typography>
              <span className="perfil-span">WebID:</span> {webId}
            </Typography>
            <hr className="line" />
            <Typography>
              <span className="perfil-span">Nombre:</span><br /> <Text className="text" property={FOAF.name.iri.value} />
            </Typography>
            <Typography>
              <span className="perfil-span">Nombre de Usuario:</span><br/> <Text className="text" property={FOAF.name.iri.value} />
            </Typography>
            <hr className="line"/>
            <Typography>
              <span className="perfil-span">Descripcion:</span> <br /><Text className="text" property={VCARD.note.iri.value} />
            </Typography>
          </CardContent>
          <hr/>
          <div>
            <input id="input" type="text" ></input>
            <button onClick={()=>modificarNombreUsuario(getDefaultSession().info.webId,document.getElementById("input").value)} ></button>
            <p>{nombre}</p>
          </div>
          <LogoutButton>
            <button className="botonLogout"><span className="logout">Logout</span></button>
          </LogoutButton>
        </Card>
      </CombinedDataProvider>
    </Container>
    
  );
};

export default Profile;
