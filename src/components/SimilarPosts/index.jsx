import React from "react";
import { Row, Container } from "react-bootstrap";
import Post from "../Post/index";
import { useTranslation } from "react-i18next";
import "./index.css";

export default function SimilarPosts({ similarPostData }) {
  const { t } = useTranslation();

  return (
    <Container className="similarPostContent">
      <h1 className="text-center title">{t("singlePost.SimilarPosts")}</h1>
      <Row className="justify-content-md-center">
        {similarPostData.slice(0, 3).map((data) => {
          return <Post postInfo={data} />;
        })}
      </Row>
    </Container>
  );
}
