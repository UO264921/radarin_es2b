const express = require("express")
const router = express.Router()

//Modelos
const User = require("./models/users")
const Usuarios = require ("./models/Usuarios")
const FriendRequest = require("./models/FriendRequest")

// Get all users
router.get("/users/list", async (req, res) => {
    const users = await User.find({}).sort('-_id') //Inverse order
    res.send(users)
})

//register a new user
router.post("/users/add", async (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    //Check if the device is already in the db
    let user = await User.findOne({ email: email })
    if (user)
        res.send({error:"Error: This user is already registered"})
    else{
        user = new User({
            name: name,
            email: email,
        })
        await user.save()
        res.send(user)
    }
})

//buscar EJEMPLO
router.get("/login", async (req, res) => {
    const users = await Usuarios.find({}).sort('-_id') //Inverse order
    res.send(users)
})

//Añadir usuario COMPROBAR
router.post("/usuario/add", async (req, res) => {
    let webid = req.body.webid;
    let nombreUsuario = req.body.nombreUsuario;
    let usuario = await Usuarios.findOne({ webid: webid })
    if (usuario)
        res.send({error:"Error: Este usuario ya ha sido añadido"})
    else{
        usuario = new Usuario({
            nombreUsuario: nombreUsuario,
            webid: webid,
            coordinates:""
        })
        await usuario.save()
        res.send(usuario)
    }
})

//Modificar nombre de usuario COMPROBAR
router.post("/usuario/modificar/nombre", async (req, res) => {
    let webid = req.body.webid;
    let nombreUsuario = req.body.nombreUsuario;
    let usuario = await Usuarios.findOne({ nombreUsuario: nombreUsuario })
    if (usuario)
        res.send({error:"Error: Este nombre de usuario ya existe"})
    else{
        let usuario = Usuarios.findOneAndUpdate(
            {
                webid: webid
            },
            {
                "$set":{
                    nombreUsuario: nombreUsuario,
                }
            })
        if(usuario)
            res.send("El nombre ha sido cambiado con éxito")
        else
            res.send("Ha habido un error al cambiar el nombre")
    }
})

//Modificar localización de usuario COMPROBAR
router.post("/usuario/modificar/coordinates", async (req, res) => {
    let webid = req.body.webid;
    let coordinates = req.body.coordinates;
    let usuario = await Usuarios.findOne({ webid: webid })
    if (usuario){
        let usuario = Usuarios.findOneAndUpdate(
            {
                webid: webid
            },
            {
                "$set":{
                    coordinates: coordinates,
                }
            })
        if(usuario)
            res.send("La localización ha sido cambiado con éxito")
        else
            res.send("Ha habido un error al cambiar la localización")
    }
    else
         res.send("Ha habido un error")
})

//

//

//Añadir elemento a la tabla de peticiones COMPROBAR
router.post("/friendrequest/add", async (req, res) => {
    let webidSolicitante = req.body.webidSolicitante;
    let webidSolicitado = req.body.webidSolicitado;
    let peticion = await FriendRequest.findOne(
        { 
            webidSolicitante:webidSolicitante,
            webidSolicitado:webidSolicitado 
        })
    if (peticion)
        res.send({error:"Error: Esta petición ya ha sido añadida"})
    else{
        peticion = new FriendRequest({
            webidSolicitante:webidSolicitante,
            webidSolicitado:webidSolicitado,
            status:"PENDIENTE"
        })
        await peticion.save()
        res.send(peticion)
    }
})

//Listar solicitudes pendientes COMPROBAR
router.post("/friendrequest/list/pendientes", async (req, res) => {
    let webidSolicitado = req.body.webidSolicitado;
    let peticiones = await FriendRequest.find(
        { 
            webidSolicitado:webidSolicitado,
            status:"PENDIENTE"
        }) 
    res.send(peticiones) 
})

//Listar solicitudes completadas COMPROBAR
router.post("/friendrequest/list/completadas", async (req, res) => {
    let webidSolicitante = req.body.webidSolicitante;
    let peticiones = await FriendRequest.find(
        { 
            webidSolicitante:webidSolicitante,
            status:"COMPLETADO"
        }) 
    res.send(peticiones) 
})

//Aceptar solicitud COMPROBAR
router.post("/friendrequest/aceptar", async (req, res) => {
    let webidSolicitante = req.body.webidSolicitante;
    let webidSolicitado = req.body.webidSolicitado;
    let peticion = await FriendRequest.findOne(
        { 
            webidSolicitante:webidSolicitante,
            webidSolicitado:webidSolicitado
        })
    if (peticion){
        let peticion = FriendRequest.findOneAndUpdate(
            {
                webidSolicitante:webidSolicitante,
                webidSolicitado:webidSolicitado
            },
            {
                "$set":{
                    status: "COMPLETADO",
                }
            })
        if(peticion)
            res.send("La petición ha sido aceptada con éxito")
        else
            res.send("Ha habido un error al aceptar la petición")
    }
    else
         res.send("Ha habido un error")
})

//Eliminar solicitud COMPROBAR
router.post("/friendrequest/delete", async (req, res) => {
    let webidSolicitante = req.body.webidSolicitante;
    let webidSolicitado = req.body.webidSolicitado;
    let peticion = await FriendRequest.findOneAndDelete(
        {
            webidSolicitante:webidSolicitante,
            webidSolicitado:webidSolicitado
        })

    if (peticion)
        res.send("La petición "+peticion+" ha sido eliminada con éxito")
    else{
        res.send("Ha ocurrido un error")
    }
})

module.exports = router