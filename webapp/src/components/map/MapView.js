// CSS StyleSheets
import 'leaflet/dist/leaflet.css';
import './map.css';

// Import dependences
import { MapContainer, TileLayer } from 'react-leaflet';
import { getUser, getFriends } from '../domain/UserGateway';
import { useState } from 'react';
import { useInterval } from '../hooks/UseInterval';
import { getMarkers } from './Markers';
import { getMapBoxAccessToken, getAttributionMessage } from '../persistence/RadarInGateway';

// Functional React Component using React Hooks
// https://es.reactjs.org/docs/components-and-props.html
function MapView(props) {
    const [state, setState] = useState({ user: getUser(), friends: getFriends() });

    let users = [state.user];
    Array.prototype.push.apply(users, state.friends);
    let usersMarkers = getMarkers(users);

    useInterval(() => {
        setState({ user: getUser(), friends: getFriends() });
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