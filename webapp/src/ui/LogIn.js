import './LogIn.css';
import React from 'react';
import {Grid } from '@material-ui/core'
import LoginButton from "./LoginButtons"

function LogIn(props) {
    return (
        <div className="loginbackground">
        <div style={{ position: "absolute", bottom: "10%" , width:"100%"}}>
            <div >
            </div>
            <Grid className="container-buttons" container direction="column">
                <LoginButton className="loginButton" />
            </Grid>
            <a href={window.location.origin+"/radmin"}>Accede como administrador</a>
        </div>
        </div>
    )
}
export default LogIn;