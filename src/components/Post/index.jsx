/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { useTranslation } from "react-i18next";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";
import loadingGif from "../PostList/image/loadingGif.gif";

export default function Post(postInfo) {
  const { t } = useTranslation();
  if (postInfo.postInfo && postInfo.postInfo.date && postInfo.postInfo.title) {
    return (
      <Col className="singlePost" lg={3} sm={12} md={6}>
        <Link to={`posts/${postInfo.type}/${postInfo.postInfo.id}`}>
          <p className="cardTitle text-center">{postInfo.postInfo.title}</p>
        </Link>
        <p className="postDate">
          {t("postPage.date")}: {postInfo.postInfo.date}
        </p>
        <p className="postName">
          {t("postPage.Author")}: {postInfo.postInfo.profileName}
        </p>
        <p className="cardBody text-center">{postInfo.postInfo.description}</p>
        <img
          className="cardImg"
          src={postInfo.postInfo.image}
          alt={t("postPage.altVolunteerHeader")}
        />
      </Col>
    );
  }
  // eslint-disable-next-line no-else-return
  else {
    return <img className="loadingGif" src={loadingGif} alt="loading..." />;
  }
}
