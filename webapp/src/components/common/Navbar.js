import { AppBar, Container } from '@material-ui/core';
import React from 'react';

function Navbar(props) {
    return (
        <AppBar style={{ backgroundColor: "grey", height: "7vh", fontSize: "3vh" }} position="static">
            <Container style={{ marginTop: "2vh", textAlignLast: "center" }}>
                <img alt="Radarin"></img>
            </Container>
        </AppBar>
    );
}
export default Navbar;