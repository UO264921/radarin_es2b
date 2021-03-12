import './LogIn.css';
import React from 'react';
import {Container, Grid } from '@material-ui/core'
import Provider from './Provider';
import Navbar from '../common/Navbar';
import WebId from './WebId';
import {LoginButton, RegisterButton} from "./LoginButtons"

class LogIn extends React.Component {
    render() {
        return (
            <section>
                <Navbar />
                <Container>
                <Grid className="container-provider-webid" container direction="column">
                    <Provider />
                    <div class="divisor">
                        <span class="divisor-line"></span>
                        <span class="divisor-text"> OR </span>
                        <span class="divisor-line"></span>
                    </div>
                    <WebId />
                </Grid>
                </Container>
                <Grid className="container-buttons" container direction="column">
                    <RegisterButton/>
                    <LoginButton />
                </Grid>

            </section>
        );
    }
}
export default LogIn;