import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "AirBNB",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Feed Forward",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Commodity Tracker",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "BeInterview Ready",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Femine Sync",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Skin Cancer Detection",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p> Uncover the threads of creativity woven into each project, illustrating a dedication to pushing boundaries and delivering exceptional outcomes.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second"></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tech Stack</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Tech stack used in Projects is : <br></br>
                      MERN Stack<br></br>
                      Natural Language Processing<br></br>
                      Typescript<br></br>
                      Python<br></br>
                      C++,C,C#</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p>Tech stack used in Projects is : <br></br>
                      MERN Stack<br></br>
                      Natural Language Processing<br></br>
                      Typescript<br></br>
                      Python<br></br>
                      C++,C,C#<br></br>
                      Artifical Intelligence<br></br>
                      Machine Learning</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
