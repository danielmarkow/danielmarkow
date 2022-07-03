import * as React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/Col';


export default function Aboutme() {
    return (
        <Container fluid="sm">
            <Row>
                <h2>About Me</h2>
                <img src="portrait.png" alt="portrait of me eating soup" id="portrait"/>
                <ul className="bio">
                    <li>
                        Daniel Markow 
                    </li>
                    <li>
                        <a href= "mailto:daniel@nonreliant.me">daniel@nonreliant.me</a>
                    </li>
                    <li>
                        <a href="https://github.com/danielmarkow" target="_blank" rel="noreferrer"><img src="github.png" alt="github logo" className="social-media" /></a>
                        <a href="https://www.linkedin.com/in/daniel-markow-5b7435a1/" target="_blank" rel="noreferrer"><img src="linkedin.png" alt="linkedin logo" className="social-media" /></a>
                        <a href="https://www.instagram.com/daniel.markow/" target="_blank" rel="noreferrer"><img src="instagram.png" alt="insta logo" className="social-media" /></a>
                        <a href="https://twitter.com/nonreliant_me" target="_blank" rel="noreferrer"><img src="twitter.png" alt="twitter logo" className="social-media" /></a>
                    </li>
                </ul>
            </Row>
            <Row>
                
            </Row>
            <Row>
                <h3>Profile</h3>
                <p>I have been working in Business Intelligence at Volkwagen for 7+ years in various roles. Initially developing reports and analytics applications with SAP BO and Qlik in Group Logistics my work evolved into data engineering tasks. I spend a lot of time developing workflows with PySpark as part of a AWS-based data lake while being the product owner of the very same. Now I am a project manager in IT working on development and security of AWS applications. Currently I participate in a MIT xPro course. My goal is to eventually get into full stack development.</p>
            </Row>
            <Row>
                <h3>Experience</h3>
                <p><i>Application Manager Data Integration and Analytics, Volkswagen AG Group IT, Wolfsburg — 2020-09 - Present</i><br />
                Migration of an on-premises data warehouse to a AWS cloud based data lake, project management and coordination of external developers, requirements management with business department representatives, cloud infrastructure development, cloud security</p>
                <p><i>Analyics and Data Engineer, Volkswagen AG Group Logistics, Wolfsburg — 2015-01 - 2020-08</i><br />
                Senior data engineer and project owner Logistics Data Lake, ETL development with PySpark, data modelling for analytics, coordination of group wide ETL development in material logistics, Qlik development, report development with SAP Business Objects</p>
                <p><i>Research Assistant, Leibniz University Institute of Social Policy, Hannover — 2013-02 - 2014-10</i><br />Data mining and panel data analysis with Stata and R</p>
                <p><i>Intern, Sauer Walzenfabriken GmbH &#38; Co. KG, Hannover — 2012-08 - 2012-10</i><br />
                Data engineering and analytics, capacity planning, assisted in a initial launch of a production planning system</p>
                <p><i>Student Assistant, Leibniz University Department of Economics and Management, Hannover — 2011-05 - 2014-10</i><br />
                Development and content creation for the faculty website (typo3)</p>
            </Row>
            <Row>
                <h3>Formal Education</h3>
                <p><i>Leibniz University Hannover</i> — Bachelor of Science in Economics and Management with majors in Labor Economics, Economic Theory and Statistics</p>
                <p><i>Volkswagen Commercial Vehicles Hannover</i> — IHK certified car body manufacturer (vocational training)</p>
            </Row>
            <Row>
                <h3>Skills</h3>
                <p>IT project management, requirements management, Python and SQL development, cloud infrastructure development and cloud security with focus on AWS, data engineering and development of analytics frontends, definition of KPI systems for process controlling</p>
            </Row>
        </Container>
    );
}