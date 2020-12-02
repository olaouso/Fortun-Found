import React from "react";
import "./index.css";

import { Row } from "react-bootstrap";
import AboutCard from "../aboutUsCard";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();
  const aboutCardInfo = [...t("about.aboutUs", { returnObjects: true })];

  return (
    <div className="aboutCenter">
      <div>
        <h2 className="aboutHeader">{t("about.about")}</h2>
      </div>
      <Row>
        {aboutCardInfo.map((aboutCard, index) => (
          <AboutCard {...aboutCard} key={index} />
        ))}
      </Row>
    </div>
  );
}
