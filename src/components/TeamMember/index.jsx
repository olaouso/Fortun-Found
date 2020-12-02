import React from "react";
import "./index.css";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Member(props) {
  return (
    <Col md={4} className="memberCol">
      <img src={props.img} alt={props.name} className="teamMemberImg" />
      <h4 className="memberTitle">{props.name}</h4>
      <p className="memberTitle">{props.title}</p>
      <a target="_blank" rel="noopener noreferrer" href={props.gitHubLinks}>
        <FontAwesomeIcon className="memberCol" icon={faGithub} size="2x" />
      </a>
    </Col>
  );
}
