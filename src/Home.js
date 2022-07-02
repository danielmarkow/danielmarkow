import * as React from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";


export default function Home() {
  return (
    <Container>
      <Row>
        <h2>Greetings</h2>
      </Row>
      <Row>
          <p>Welcome to my portfolio page. I am Daniel, 35 years old from Brunswick in Germany. I am a Programmer, Data Engineer, Analytics Developer, AWS person, IT project manager and aspiring full stack developer.</p>
          <p>In my free time I like to spend time with my beautiful girlfriend, exercise, take fotos and travel.</p>
      </Row>
    </Container>
  );
}


