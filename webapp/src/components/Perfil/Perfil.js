import {
  useSession,
  CombinedDataProvider,
  Image,
  LogoutButton,
  Text,
} from "@inrupt/solid-ui-react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Typography,
} from "@material-ui/core";
import { FOAF, VCARD } from "@inrupt/lit-generated-vocab-common";
import "./Perfil.css";

const Perfil = () => {
  const { session } = useSession();
  const { webId } = session.info;

  return (
    <Container class="fixed">
      <CombinedDataProvider datasetUrl={webId} thingUrl={webId}>
        <Card class="card">
          <Typography>
            <span class="miPerfil">Mi Perfil</span>
          </Typography>
          <CardActionArea>
            <Image class="perfil" property={VCARD.hasPhoto.iri.value} />
          </CardActionArea>
        <hr/>
          <CardContent>
            <Typography>
              <span>WebID:</span> {webId}
            </Typography>
            <hr class="line"/>
            <Typography>
              <span>Nombre:</span><br/> <Text class="text" property={FOAF.name.iri.value} />
            </Typography>
            <hr class="line"/>
            <Typography>
              <span>Descripcion:</span> <br/><Text class="text" property={VCARD.note.iri.value} />
            </Typography>
          </CardContent>
          <hr/>
          <LogoutButton>
            <Button class="botonLogout"><span class="logout">Logout</span></Button>
          </LogoutButton>
        </Card>
      </CombinedDataProvider>
    </Container>
  );
};

export default Perfil;
