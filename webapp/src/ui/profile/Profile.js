// External dependences
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

// Dependences from: ~/ui/profile
import "./profile.css";

const Profile = () => {
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
          <hr />
          <CardContent>
            <Typography>
              <span className="perfil-span">WebID:</span> {webId}
            </Typography>
            <hr className="line" />
            <Typography>
              <span className="perfil-span">Nombre:</span><br /> <Text className="text" property={FOAF.name.iri.value} />
            </Typography>
            <hr className="line" />
            <Typography>
              <span className="perfil-span">Descripcion:</span> <br /><Text className="text" property={VCARD.note.iri.value} />
            </Typography>
          </CardContent>
          <hr />
          <LogoutButton>
            <button className="botonLogout"><span className="logout">Logout</span></button>
          </LogoutButton>
        </Card>
      </CombinedDataProvider>
    </Container>
  );
};

export default Profile;
