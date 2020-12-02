import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../components/contexts/AuthContext";

export default function SinglePostHeader({ postHeaderData, postType }) {
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  return (
    <Container className="postHeader">
      <Row className="headerSection">
        <Col lg={10}>
          <h2 className="postTitle">{postHeaderData.title}</h2>
          <h6>{postHeaderData.description}</h6>
        </Col>
        <Col lg={2}>
          <Link
            to={postType === "donatorPost" ? "/donatePosts" : "/receivePosts"}
          >
            <Button className="backButton" variant="light">
              {t("singlePost.BackButton")}
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="headerSection">
        <Col lg={9}>
          <img
            className="singlePostPagePostImage"
            src={postHeaderData.image}
            alt="PostImage"
          />
        </Col>
        <Col lg={3}>
          <div className="postSection">
            <p>{t("singlePost.PostType")}</p>
            <span className="postType">{postHeaderData.type}</span>
          </div>
          <div className="postSection">
            <p>{t("singlePost.ApplicationDeadline")}</p>
            <span className="postType">{postHeaderData.date}</span>
          </div>
          {currentUser ? (
            <Link to={`/application/${postType}/${postHeaderData.id}`}>
              <Button className="applyButton" variant="light">
                {t("singlePost.Apply")}
              </Button>
            </Link>
          ) : (
            <Link className="pleaseLogInLink" to="/login">
              {" "}
              <h3 className="pleaseLogInText">
                {" "}
                {t("singlePost.PleaseLogInToApply")}
              </h3>
            </Link>
          )}
        </Col>
      </Row>
    </Container>
  );
}
