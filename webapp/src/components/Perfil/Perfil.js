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
import "./Perfil.css";
import { modificarNombreUsuario,getUsernameByWebId } from "../../api/api";
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";


const Perfil = () => {
  const { session } = useSession();
  const { webId } = session.info;

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
        <hr/>
          <CardContent>
            <Typography>
              <span className="perfil-span">WebID:</span> {webId}
            </Typography>
            <hr className="line"/>
            <Typography>
              <span className="perfil-span">Nombre:</span><br/> <Text className="text" property={FOAF.name.iri.value} />
            </Typography>
            
            <hr className="line"/>
            <Typography>
              <span className="perfil-span">Descripcion:</span> <br/><Text className="text" property={VCARD.note.iri.value} />
            </Typography>
          </CardContent>
          <hr/>
          <div>
            <input id="input" type="text" ></input>
            <button onClick={()=>modificarNombreUsuario(getDefaultSession().info.webId,document.getElementById("input").value)} ></button>
            </div>
          <LogoutButton>
            <button className="botonLogout"><span className="logout">Logout</span></button>
          </LogoutButton>
        </Card>
      </CombinedDataProvider>
    </Container>
  );
};

export default Perfil;
