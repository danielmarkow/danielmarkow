import * as React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


export default function Projects() {
    return (
        <Container fluid="sm">
            <Row>
                <h2>Projects</h2>
            </Row>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card style={{ width:'18rem' }}>
                        <Card.Img variant="top" src="oneeye.png"/>
                        <Card.Body>
                            <Card.Title>Eyes Exercise</Card.Title>
                            <Card.Text>
                                Make the all seeing eyes move.
                            </Card.Text>
                            <Button 
                                variant="primary"
                                href="https://github.com/danielmarkow/eyes"
                            >Repository on GitHub</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width:'18rem' }}>
                        <Card.Img variant="top" src="pacman.png" />
                        <Card.Body>
                            <Card.Title>PacMan Exercise</Card.Title>
                            <Card.Text>
                                Pacman moves and bounces off the walls.
                            </Card.Text>
                            <Button 
                                variant="primary"
                                href="https://github.com/danielmarkow/pacManExercise"
                            >Repository on GitHub</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}