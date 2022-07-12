import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png"
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
    <Container>
    <Row>
      <Col size={12}>
      <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills | Education</h2>
                        <p>Simply the percentage below show how skilled I am in such domain.<br></br> So don't hesitate a skilled labor like me.</p>
                        <Tab.Container id="skills-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">SKILLS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">EDUCATION</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                      <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                      <div className="item">
                          <img src={meter1} alt="" />
                          <h5>Photoshop/ Ullistrator</h5>
                      </div>
                      <div className="item">
                          <img src={meter2} alt="" />
                          <h5>Android/Kotlin/Java</h5>
                      </div>
                      <div className="item">
                          <img src={meter3} alt="" />
                          <h5>MERN Stack</h5>
                      </div>
                      <div className="item">
                          <img src={meter1} alt="" />
                          <h5>Vector</h5>
                      </div>
                      <div className="item">
                          <img src={meter2} alt="" />
                          <h5>MySQL/SQL/Postman</h5>
                      </div>
                      <div className="item">
                          <img src={meter1} alt="" />
                          <h5>PHP Framework</h5>
                      </div>
                  </Carousel> 
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                      <p>
                      Bachelors Degree at University Of Kigali<br></br>
                      Jul, 2022 - Present<br></br>
                      I working for Bachelors Degree.
                      <br></br><br></br>
                      Advanced Diploma at IPRC Karongi<br></br>
                      March, 2018 - May, 2022<br></br>
                      Rewarded Advanced Diploma Certificate.
                      <br></br><br></br>
                      A-Level at ES Saint Joseph Karuganda<br></br>
                      Jan, 2015 - Nov,2017<br></br>
                      I got an A2 Certificate
                      <br></br><br></br>O-Level at ESSA Ruhengeri
                      <br></br>Jan, 2012 - Nov, 2014<br></br>
                      Rewarded OLevel Certificate
                      <br></br><br></br>Primary school at Nyamagumba Primary School
                      <br></br>Jan, 2006 - Nov, 2011<br></br>
                      Gained Primary school Certificate</p>
                      </Row>
                      </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                       
                    </div>
                    </div>}
                    </TrackVisibility>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
