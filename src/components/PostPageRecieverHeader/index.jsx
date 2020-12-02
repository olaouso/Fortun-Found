/* eslint-disable max-len */
/* eslint-disable react/self-closing-comp */
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import recieverHeaderPic from "./image/recieverHeaderPic.jpg";
import "./index.css";

export default function PostPageRecieverHeader() {
  const { t } = useTranslation();

  return (
    <Container fluid="md" className="postRecieveHeader">
      <Row>
        <Col md={6}>
          <img
            className="recieverHeaderImage"
            src={recieverHeaderPic}
            alt={t("postPageReciever.altRecieverHeader")}
          />
        </Col>
        <Col className="postHeaderRecieverText">
          <p>{t("postPageReciever.title")}</p>
        </Col>
      </Row>
    </Container>
  );
}
