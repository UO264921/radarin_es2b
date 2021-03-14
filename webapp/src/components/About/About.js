import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import A from 'react-bootstrap/SafeAnchor';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class About extends React.Component {
    render() {
        return <Container fluid="md">
            <Row>
                <Col>
                    <Jumbotron className="mt-4">
                        <h1>About Radarin</h1>
                        <p>
                        Radarin será un sistema para facilitar encuentros entre amigos utilizando nuevas tecnologías. La aplicación podrá acceder a la información de localización del teléfono móvil de los usuarios que voluntariamente la tengan activada y permitirá que otros usuarios que sean sus amigos puedan conocer cuándo están cerca.
                        </p>
                        <p>
                            <A className="btn btn-primary" href="https://solidproject.org/about" target="_blank">Learn more about Solid</A>
                        </p>
                    </Jumbotron>
                </Col>
            </Row>
            
        </Container>;
    }

}
export default About;