// External dependences
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

// Dependences from: ~/ui/map
import './map.css';
import { getMarkers } from './modules/Markers';


// Import dependences
import { getDefaultSession } from '@inrupt/solid-client-authn-browser';
import { addUsuario, modificarCoordenadas, getUsernameByWebId } from '../../api/api';

// Dependences from: ~/util
import { useInterval } from '../../util/hooks/UseInterval';
import { getMapBoxAccessToken, getAttributionMessage } from '../../util/CommonDataConfiguration';

// Domain dependences
import ServicesFactory from '../../domain/ServicesFactory';

// Functional React Component using React Hooks
// https://es.reactjs.org/docs/components-and-props.html
function MapView(props) {
    addUsuario(getDefaultSession().info.webId);
    const [state, setState] = useState({
        user: ServicesFactory.forCurrentUser().getDefaultUser(),
        friends: null
    });

    // Executing promises in a React component
    // https://www.pluralsight.com/guides/executing-promises-in-a-react-component

    // Get username
    const refreshState = async () => {
        const webId = getDefaultSession().info.webId;
        let username = (await getUsernameByWebId(webId)).nombreUsuario;
        
        let receivedUser = await ServicesFactory.forCurrentUser().getLoggedUser(username);
        //console.log("Usuario: ", receivedUser);
        if (receivedUser != null){
            setState({ user: receivedUser, friends:await ServicesFactory.forCurrentUser().getFriends() });
            await modificarCoordenadas(getDefaultSession().info.webId,receivedUser.latitude+","+receivedUser.longitude);
        }
    }

    let users = [state.user];
    Array.prototype.push.apply(users, state.friends);
    let usersMarkers = getMarkers(users);

    useInterval(
        useEffect(() => {
            refreshState();
        })
        , parseInt(1000 * 500));

    return (
        <MapContainer center={state.user.getLatLng()} zoom={parseFloat(13.25)} >
            <TileLayer
                url={'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + getMapBoxAccessToken()}
                attribution={getAttributionMessage()}
                maxZoom={parseInt(18)}
                id='mapbox/streets-v11'
                tileSize={parseInt(512)}
                zoomOffset={parseInt(-1)}
            />
            {usersMarkers}
        </MapContainer >
    );
}

export default MapView;