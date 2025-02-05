import { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/prjct1.jpg";
import projImg2 from "../assets/img/prjct2.jpg";
import projImg3 from "../assets/img/prjct3.jpg";
import azure from "../assets/img/azure.png";
import mongodb from "../assets/img/mongodb.png";
import nestjs from "../assets/img/nestjs.png";
import docker from "../assets/img/docker.png";
import react_ from "../assets/img/react.png";
import python from "../assets/img/python.png";
import az900 from "../assets/img/az900.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { Technology } from "./Technologies";
import { Certification } from "./Certification";

export const Projects = () => {
  const projects = [
    {
      title: "Car Rental App",
      description: "Web Design & Web Development",
      imgUrl: projImg1,
      link: "https://github.com/apollinelbcr/team_1-soen341projectW2024",
    },
    {
      title: "Chess Database Design",
      description: "Databases & APIs",
      imgUrl: projImg2,
      link: "https://github.com/etiennepaquet1/soen363-lichess",
    },
    {
      title: "Warzone Game",
      description: "Observer & Adapter",
      imgUrl: projImg3,
      link: "https://github.com/ZaidMinhas/Warzone_CPP",
    },
  ];

  const technologies = [
    { imgUrl: azure },
    { imgUrl: nestjs },
    { imgUrl: react_ },
    { imgUrl: python },
    { imgUrl: mongodb },
    { imgUrl: docker },
  ];

  const certifications = [{ imgUrl: az900 }];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <p>
                ✨ As a software engineering student, I have worked on diverse
                projects, including designing database systems, developing game
                engines in C++, and implementing web app solutions. I have also
                earned certifications in Azure Fundamentals and am aiming to
                obtain additional Microsoft technology certifications ✨
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">School Projects</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Technologies Used</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Certifications</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row className="mb-4 g-3">
                      {technologies.map((tech, index) => (
                        <Technology key={index} {...tech} />
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row className="d-flex justify-content-center align-items-center">
                      {certifications.map((cert, index) => (
                        <Certification key={index} {...cert} />
                      ))}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};
