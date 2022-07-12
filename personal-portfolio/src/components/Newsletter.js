import React from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {

  return (
      <Col lg={12}>
        <div className="newsletter-bx">
          <Row>
              <h3 style={{textAlign: "center",color:"#555"}}>MAC ART</h3>
              <span className="tagline">"WE &nbsp;&nbsp;&nbsp;DESIGN &nbsp;&nbsp;&nbsp;YOUR &nbsp;&nbsp;&nbsp;DREAMS"</span>
          </Row>
        </div>
      </Col>
  )
}
