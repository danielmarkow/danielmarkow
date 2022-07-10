import * as React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Projekt({project}) {
    return (
        <>
            <Card style={{ width:'18rem' }}>
                <Card.Img variant="top" src={project.image}/>
                <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>
                        {project.description}
                    </Card.Text>
                    <Button 
                        variant="primary"
                        href={project.githubLink}
                    >Repository on GitHub</Button>
                </Card.Body>
            </Card>
        </>
    );
}