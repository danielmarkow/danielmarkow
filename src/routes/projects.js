import * as React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Projects() {
    return (
        <Container>
            <Row>
                <h2>Projects</h2>
            </Row>
            <Row>
                <Card style={{ width:'18rem' }}>
                    <Card.Img variant="top" src="oneeye.png" />
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
            </Row>
        </Container>
    );
}