// External dependences
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

// Dependences from: ~/ui/map
import './map.css';
import { getMarkers } from './modules/Markers';

// Dependences from: ~/util
import { useInterval } from '../../util/hooks/UseInterval';
import { getMapBoxAccessToken, getAttributionMessage } from '../../util/CommonDataConfiguration';

// Domain dependences
import ServicesFactory from '../../domain/ServicesFactory';

let currentUserService = ServicesFactory.forCurrentUser();

// Functional React Component using React Hooks
// https://es.reactjs.org/docs/components-and-props.html
function MapView(props) {
    const [state, setState] = useState({ user: currentUserService.getUser(), friends: currentUserService.getFriends() });

    let users = [state.user];
    Array.prototype.push.apply(users, state.friends);
    let usersMarkers = getMarkers(users);

    useInterval(() => {
        setState({ user: currentUserService.getUser(), friends: currentUserService.getFriends() });
    }, parseInt(1000 * 5));

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