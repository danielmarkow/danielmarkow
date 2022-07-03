import * as React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';
import Project from './project';
import myProjects from './myProjects';

export default function Projects() {

    return (
        <Container fluid="sm">
            <Row>
                <h2>Projects</h2>
            </Row>
            <Row xs={1} md={2} className="g-4">
                {myProjects.map((myProject) => <div key={myProject.id}><Project project={myProject} /></div>)}
            </Row>
        </Container>
    );
}