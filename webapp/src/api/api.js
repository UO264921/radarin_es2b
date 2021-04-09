//REACT_APP_API_URI is an enviroment variable defined in the file .env.development or .env.production
export async function addUser(username,email){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/users/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({'name':username, 'email':email})
      })
    return await response.json()
}

export async function getUsers(){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/users/list')
    return await response.json()
}

//buscar EJEMPLO
export async function getUsuarios(){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/login')
    return await response.json()
}

//Añadir usuario COMPROBAR
export async function addUsuario(webid,nombreUsuario){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/usuario/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(
            {
                'webid':webid, 
                'nombreUsuario':nombreUsuario
            })
      })
    return await response.json()
}

//Modificar nombre de usuario COMPROBAR
export async function modificarNombreUsuario(webid,nombreUsuario){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/usuario/modificar/nombre', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(
            {
                'webid':webid, 
                'nombreUsuario':nombreUsuario
            })
      })
    return await response.json()
}

//Modificar localización de usuario COMPROBAR
export async function modificarCoordenadas(webid,coordinates){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/usuario/modificar/coordinates', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(
            {
                'webid':webid, 
                'coordinates':coordinates
            })
      })
    return await response.json()
}

//METODO PAR LLAMAR A ESTE METODO CADA X TIEMPO (ESTA PUESTO 20 segs) ESTO HAY QUE PONERLO DONDE SE LLAME AL DE ARRIBA, HAY QUE PONER PARAMETROS
//import { useEffect } from "react"
useEffect(()=>{
    setInterval(modificarCoordenadas("webid","coordenadas"),20000)
});


             
//Añadir elemento a la tabla de peticiones COMPROBAR
export async function addFriendRequest(webidSolicitante,webidSolicitado){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/friendrequest/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(
            {
            'webidSolicitante':webidSolicitante, 
            'webidSolicitado':webidSolicitado
        })
      })
    return await response.json()
}

//Listar solicitudes pendientes COMPROBAR
export async function getSolicitudesPendientes(webidSolicitado){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/friendrequest/list/pendientes', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(
            {
                'webidSolicitado':webidSolicitado
            })
      })
    return await response.json()
}

//Listar solicitudes completadas COMPROBAR
export async function getSolicitudesCompletadas(webidSolicitante){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/friendrequest/list/completadas', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(
            {
                'webidSolicitante':webidSolicitante
            })
      })
    return await response.json()
}

//Aceptar solicitud COMPROBAR
export async function aceptarSolicitud(webidSolicitante,webidSolicitado){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/friendrequest/aceptar', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(
            {
                'webidSolicitante':webidSolicitante, 
                'webidSolicitado':webidSolicitado
            })
      })
    return await response.json()
}

//Eliminar solicitud COMPROBAR
export async function eliminarSolicitud(webidSolicitante,webidSolicitado){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/friendrequest/delete', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(
            {
                'webidSolicitante':webidSolicitante, 
                'webidSolicitado':webidSolicitado
            })
      })
    return await response.json()
}