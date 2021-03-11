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
                            Radarin will be a system to facilitate meetings between friends using new technologies.
                            The application can get access to the mobile phone localization of the users who voluntarily activate it and
                            will allow other users who are their friends to know when they are near them. Everything will be build with Solid
                            so you can be the owner of your own data!.
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