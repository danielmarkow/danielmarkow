import * as React from 'react';

import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/row';

import Project from './project';
import myProjects from './myProjects';

export default function Projects() {
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
            </Row>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Search Projects</InputGroup.Text>
                        <FormControl 
                            placeholder='enter project name or description'
                            aria-label='enter project name or description'
                            onChange = {handleChange}
                        />
                </InputGroup>
            <div className='project-grid-wrapper'>
                {filteredProjects.map((myProject) => <div key={myProject.id}><Project project={myProject} /></div>)}
            </div>
        </Container>
    );
}

{/* <Row xs={1} md={3} className="g-4"></Row> */}