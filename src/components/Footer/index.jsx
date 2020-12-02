import React from "react";

import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import WhiteLogo from "./whiteLogo.png";

const contactData = {
  address: "Tomtom, Camcı Fevzi Sk. No:32, 34433 Beyoğlu/İstanbul",
  phone: {
    phone1: "+90-955-538-33-60",
    phone2: "+90-955-533-36-50",
  },
  email: {
    email1: "office@mail.com",
    email2: "support@mail.com",
  },
};

export default function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="mainRow">
        <Col md={3}>
          <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
          <div className="alignCenter">{contactData.address}</div>
        </Col>
        <Col md={3}>
          <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
          <div className="phone">
            <div>{contactData.phone.phone1}</div>
            <div>{contactData.phone.phone2}</div>
          </div>
        </Col>
        <Col md={3}>
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
          <div className="email">
            <div>{contactData.email.email1}</div>
            <div>{contactData.email.email2}</div>
          </div>
        </Col>
        <Col md={3}>
          <img src={WhiteLogo} alt="logo" className="footerLogo" />
        </Col>
      </Row>
    </Container>
  );
}
