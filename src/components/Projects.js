import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import cytranslateImg from "../assets/img/cytranslate_img.png";
import healthImg from "../assets/img/healthcare-img.png";
import productImg from "../assets/img/bank-img.png";
import expensesImg from "../assets/img/expenses_img.png";
import littleRestoImg from "../assets/img/swiggy-clone-img.png";
import miniYtImg from "../assets/img/youtube-clone-img.png";
import goodwoodImg from "../assets/img/goodwood_img.png";
import freescribeImg from "../assets/img/freescribe_img.png";


export const Projects = () => {

  const professionalProjects = [
    {
      title: "Cytranslate",
      description: "Document Translation App",
      imgUrl: cytranslateImg,
    },
    {
      title: "Product Catalog",
      description: "Banking App",
      imgUrl: productImg,
    },
    {
      title: "Healthcare",
      description: "Health Screening App",
      imgUrl: healthImg,
    },
  ];

  const personalProjects = [
    {
      title: "GoodWood",
      description: "e-Commerce App",
      imgUrl: goodwoodImg,
      demo: "https://goodwoodfurniture.netlify.app/",
      code: "https://github.com/Dimple-Ramya/goodwood"
    },
    {
      title: "Little Restaurant",
      description: "e-Commerce App",
      imgUrl: littleRestoImg,
      demo: "https://little-india-restaurant.netlify.app/",
      code: "https://github.com/Dimple-Ramya/little-restaurant"
    },
    {
      title: "Mini Youtube",
      description: "Youtube Clone App",
      imgUrl: miniYtImg,
      demo: "https://youtube-small.netlify.app/",
      code: "https://github.com/Dimple-Ramya/youtube-clone"
    },
    {
      title: "Free Scribe",
      description: "Transcription and Translation App",
      imgUrl: freescribeImg,
      demo: "https://freescribe1.netlify.app/",
      code: "https://github.com/Dimple-Ramya/freeScribe"
    },
    {
      title: "Expense Tracker",
      description: "Expenses Tracking App",
      imgUrl: expensesImg,
      demo: "https://expensescalci.netlify.app/",
      code: "https://github.com/Dimple-Ramya/expenses"
    }
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Professional</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Personal</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            professionalProjects.map((project, index) => {
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
                      <Tab.Pane eventKey="second">
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                        <Row>
                          {
                            personalProjects.map((project, index) => {
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
                      {/* <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
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
