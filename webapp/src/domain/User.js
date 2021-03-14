import { latLng } from 'leaflet';

/* User DTO */
export class User {

    constructor(props) {
        this.username = props.username;
        this.latitude = props.latitude;
        this.longitude = props.longitude;
    }

    getLatLng() {
        if (this.latitude == null || this.longitude == null)
            return latLng(0.0, 0.0);
        return latLng(this.latitude, this.longitude);
    }

    toString() {
        let value = "Nombre de usuario: " + this.username
        if (this.latitude != null && this.longitude != null)
            value += "\n\tLatitude: " + parseFloat(this.latitude)//.toFixed(2)
                + "\n\tLongitude: " + parseFloat(this.longitude)//.toFixed(2)
                ;
        return value;
    }

}