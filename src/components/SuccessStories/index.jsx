/* eslint-disable no-unused-expressions */
/* eslint-disable import/extensions */
/* eslint-disable prefer-destructuring */
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./index.css";
import { Row, Container } from "react-bootstrap";
import Post from "../Post/index.jsx";
// eslint-disable-next-line import/extensions
import db from "../../firebaseConfig.js";
import i18next from "i18next";

export default function SuccessStories() {
  const [stories, setStories] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);
  i18next.on("languageChanged", (lng) => {
    setCurrentLanguage(lng);
  });
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const res = await db.collection("donatorPost").get();

      const data = res.docs
        .map((post) => {
          const tmp = post.data();
          const id = post.id;
          return { id, ...tmp };
        })
        .filter((post) => post.lang === currentLanguage);
      setStories(data);
    };
    fetchData();
  }, [currentLanguage]);

  return (
    <Container className="successStoriesContaier">
      <p className="text-center sucessStories">{t("successStories.header")}</p>
      <p className="text-center weSucceed">{t("successStories.paragraph")}</p>
      <Row fluid="md" className="successStoriesPosts">
        {stories
          .map((singleData) => <Post postInfo={singleData} />)
          .slice(0, 3)}
      </Row>
    </Container>
  );
}
