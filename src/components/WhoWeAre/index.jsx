import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";
import target from "./images/target.jpg";
import "./index.css";

export default function WhoWeAre() {
  const { t } = useTranslation();
  return (
    <div fluid="md" className="whoWeAre">
      <Row className="targetText">
        <Col md={6}>
          <h2 className="targetHeader">{t("whoWeAre.header")}</h2>
          <p className="targetParagraph">{t("whoWeAre.paragraph")}</p>
        </Col>

        <Col md={6}>
          <img src={target} alt="Target" className="whoWeAreImage" />
        </Col>
      </Row>

      <Row>
        <Col>
          <h1 className="whoWeAreTitle">{t("whoWeAre.howItWorks")}</h1>
        </Col>
      </Row>

      <Row className="innerVideo">
        <iframe
          height="500em"
          width="800em"
          src="https://www.youtube.com/embed/9Fev-hRCR-8"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="How It Works?"
        ></iframe>
      </Row>
    </div>
  );
}
