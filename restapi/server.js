const express = require("express")
const promBundle = require("express-prom-bundle");
const cors = require('cors');
const mongoose = require("mongoose")
const api = require("./api")

function connect() {
    const USER = "admin";
    const PASSWORD = "ADMSIS123";
    const DATA_BASE = "radarin-es2b";

    // Preparando cadena de conexion
    const CONECTOR = `mongodb://${USER}:${PASSWORD}@radarin-es2b-shard-00-00.oh0ak.mongodb.net:27017,radarin-es2b-shard-00-01.oh0ak.mongodb.net:27017,radarin-es2b-shard-00-02.oh0ak.mongodb.net:27017/${DATA_BASE}?ssl=true&replicaSet=atlas-6o8ba3-shard-0&authSource=admin&retryWrites=true&w=majority`;
    //The MONGO_URI variable is the conn ection string to MongoDB Atlas (for production). This env variable is created in heroku.
    mongo_uri = process.env.MONGO_URI || CONECTOR
    mongoose.connect(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }).then(() => {
        const app = express()

        //Monitoring middleware
        const metricsMiddleware = promBundle({ includeMethod: true });
        app.use(metricsMiddleware);

        app.use(cors());
        app.options('*', cors());
        app.use(express.json())
        app.use("/api", api)

        app.use( (request, response) => {
            request.header("Access-Control-Allow-Origin", "*");
            //request.header("Access-Control-Allow-Origin", "https://radarines2bwebapp.herokuapp.com/*");
            //request.header("Access-Control-Allow-Origin", "https://radarines2brestapi.herokuapp.com/*");
            //request.header("Access-Control-Allow-Origin", "http://localhost:3000/*"); // just for working until the final delivery and all deploy
            //request.header("Access-Control-Allow-Origin", "http://localhost:5000/api/*"); // " "
            request.header("'Access-Control-Allow-Methods: GET, POST"); // the other methods are not used in the api
        });


        app.listen(process.env.PORT || 5000, () => {
            console.log("Server has started! Using db in " + mongo_uri)
        })
    })
}

// Connect to MongoDB database, the wait is for giving time to mongodb to finish loading
setTimeout(connect, 5000)