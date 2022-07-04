import * as React from 'react';

import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/row';

import Project from './project';
import myProjects from './myProjects';

function Projects() {
    const [searchField, setSearchField] = React.useState("");

    const filteredProjects = myProjects.filter(
        project => {
          return (
            project
            .name
            .toLowerCase()
            .includes(searchField.toLowerCase()) ||
            project
            .description
            .toLowerCase()
            .includes(searchField.toLowerCase())
          );
        }
      );

    function handleChange(event) {
        setSearchField(event.target.value);
    }

    return (
        <Container fluid="sm">
            <Row>
                <h2>Projects</h2>
                <InputGroup className="mb-3" style={{width: '30vw', alignItems: 'center', display: 'flex'}}>
                    <FormControl 
                        placeholder='project name or description'
                        aria-label='project name or description'
                        onChange = {handleChange}
                    />
                </InputGroup>
            </Row>
            <Row xs={1} md={2} className="g-4">
                {filteredProjects.map((myProject) => <div key={myProject.id}><Project project={myProject} /></div>)}
            </Row>
        </Container>
    );
}

export default Projects;

/*
*/

/*
<input 
                    type = "search" 
                    placeholder = "Search People" 
                    onChange = {handleChange}
                />*/