import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import headerPic from "./image/headerPic.jpg";
import "./index.css";

export default function PostPageVolunteerHeader() {
  const { t } = useTranslation();

  return (
    <Container fluid="md" className="postHeader">
      <Row>
        <Col md={6}>
          <img
            className="headerPicture"
            src={headerPic}
            alt={t("postPage.altVolunteerHeader")}
          />
        </Col>
        <Col className="postHeaderText">
          <p>{t("postPage.title")}</p>
        </Col>
      </Row>
    </Container>
  );
}
