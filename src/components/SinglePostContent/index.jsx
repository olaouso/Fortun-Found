import React from "react";
import "./index.css";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function SinglePostContent({ postContentData }) {
  const { t } = useTranslation();

  const targetGroup = () => {
    return (
      <>
        <h2>{t("singlePost.Prerequisites")}</h2>
        <p>{postContentData.target}</p>
      </>
    );
  };
  const prerequisites = () => {
    return (
      <>
        <h2>{t("singlePost.Prerequisites")}</h2>
        <p>{postContentData.prerequisites}</p>
      </>
    );
  };
  return (
    <Container>
      <Row className="contentSection">
        <Col lg={9}>
          {postContentData.prerequisites ? prerequisites() : targetGroup()}
          <h1>{t("singlePost.Address")}</h1>
          <p>{postContentData.address}</p>
        </Col>
        <Col lg={3}>
          <h3>{t("singlePost.AboutPostOwner")}</h3>
          <p>{postContentData.about}</p>
          <p>{postContentData.profileName}</p>
        </Col>
      </Row>
    </Container>
  );
}
