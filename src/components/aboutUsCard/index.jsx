import React from "react";
import "./index.css";
import { Col } from "react-bootstrap";

export default function AboutCard(props) {
  return (
    <Col md={4}>
      <h4 className="cardTitle">{props.title}</h4>
      <p className="cardParagraph">{props.paragraph}</p>
    </Col>
  );
}
