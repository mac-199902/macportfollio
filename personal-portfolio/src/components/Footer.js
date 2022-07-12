import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
          <a href="https://www.linkedin.com/in/mukiza-alain-christian-2128ab177/"><img src={navIcon1} alt="" /></a>
          <a href="https://web.facebook.com/mukiza.ronaldo?_rdc=1&_rdr"><img src={navIcon2} alt="" /></a>
          <a href="https://www.instagram.com/accounts/login/?next=/mukiza_alain/"><img src={navIcon3} alt="" /></a>
        </div>
            <p>&copy;Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
