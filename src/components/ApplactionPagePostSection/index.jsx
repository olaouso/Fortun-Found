import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import { useTranslation } from "react-i18next";

export default function PostSection(props) {
  const { t } = useTranslation();

  return (
    <Container className="postApplicationPage">
      <Row>
        <Col md={6}>
          <img
            className="postImageApplicationPage"
            src={props.image}
            alt="post"
          />
        </Col>
        <Col className="postTitleDescription" md={6}>
          <div>
            <h2 className="postTitle">{props.title}</h2>
            <p className="postDescription">{props.description}</p>
            <p className="postDescription">
              {t("applicationPageStep1.date")} {props.date}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
