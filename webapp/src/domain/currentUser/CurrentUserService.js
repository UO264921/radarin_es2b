import { User } from './User';

export function getUser() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            localStorage.setItem("currentPosition", JSON.stringify({
                "lat": parseFloat(position.coords.latitude),
                "lng": parseFloat(position.coords.longitude)
            }))
        });
        let position = JSON.parse(localStorage.getItem("currentPosition"));
        return new User({ username: "Tú", latitude: position.lat, longitude: position.lng });
    }
    return null;
}

export function getFriends() {
    // TO DO
    // Se han establecido valores por defecto para la presentación del prototipo
    return [
        /* Usuario en la Facultad de Ciencias de Oviedo */
        new User({ username: "winetsunamisealion", latitude: 43.357647897150976, longitude: -5.853398968683256 }),
        /* Usuario en el Parque de Invierno de Oviedo */
        new User({ username: "monkeybeetfishorange", latitude: 43.35172405394816, longitude: -5.853235079946685 }),
        /* Usuario en la Facultad Padre Ossó de Oviedo */
        new User({ username: "operaryegroundhogday", latitude: 43.35652285126186, longitude: -5.845319804493103 })
    ];
}