/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/extensions */
/* eslint-disable prefer-destructuring */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types*/

import React, { lazy, Suspense, useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./index.css";
import i18next from "i18next";
import db from "../../firebaseConfig.js";
import loadingGif from "./image/loadingGif.gif";

const Post = lazy(() => import("../Post/index.jsx"));

export default function PostList(props) {
  const [posts, setPosts] = useState([]);
  const [constantAllPosts, setConstantAllPosts] = useState();
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);
  i18next.on("languageChanged", (lng) => {
    setCurrentLanguage(lng);
  });
  const { t } = useTranslation();

  const fetchData = async () => {
    const res = await db.collection(`${props.collectionName}`).get();

    const data = res.docs
      .map((post) => {
        const tmp = post.data();
        const id = post.id;
        return { id, ...tmp };
      })
      .filter((post) => post.lang === currentLanguage);

    setPosts(data);
    setConstantAllPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, [props]);

  const handleSort = async (e) => {
    if (e.target.value === "title") {
      const res = await db
        .collection(`${props.collectionName}`)
        .orderBy("title", "asc")
        .get();
      const data = res.docs.map((post) => {
        const tmp = post.data();
        const id = post.id;
        return { id, ...tmp };
      });
      setPosts(data);
    } else if (e.target.value === "date") {
      const res = await db
        .collection(`${props.collectionName}`)
        .orderBy("date", "desc")
        .get();
      const data = res.docs.map((post) => {
        const tmp = post.data();
        const id = post.id;
        return { id, ...tmp };
      });
      setPosts(data);
    }
  };

  const handleType = (e) => {
    if (e.target.value === "all") {
      setPosts(constantAllPosts);
    } else {
      const fltr = constantAllPosts.filter((el) => el.type === e.target.value);
      setPosts(fltr);
    }
  };

  const handleCity = (e) => {
    if (e.target.value === "all") {
      setPosts(constantAllPosts);
    } else {
      const fltr = constantAllPosts.filter(
        (el) => el.address === e.target.value
      );
      setPosts(fltr);
    }
  };

  const handleSearch = (e) => {
    const searchKeyWord = e.target.value;

    const searchResults = constantAllPosts.filter((post) =>
      Object.values(post).find((el) => {
        if (typeof el === "string") {
          return el.toLowerCase().includes(searchKeyWord.toLowerCase());
        }
      })
    );
    setPosts(searchResults);
  };
  if (!constantAllPosts) {
    return (
      <iframe
        title="load"
        src="https://giphy.com/embed/xTk9ZvMnbIiIew7IpW"
        width="20"
        height="20"
      />
    );
  }
  return (
    <Container fluid="lg">
      <Row className="searchAndFilter">
        <div>
          <label className="volunteerFilterLabel">{t("postPage.type")}</label>
          <select className="postFilter" id="type" onChange={handleType}>
            <option value="all">{t("postPage.allLabel")}</option>
            <option value="goods">{t("postPage.goods")}</option>
            <option value="money">{t("postPage.money")}</option>
            <option value="service">{t("postPage.service")}</option>
          </select>
        </div>

        <div>
          <label className="volunteerFilterLabel">{t("postPage.city")}</label>
          <select className="postFilter" id="city" onChange={handleCity}>
            <option value="all">{t("postPage.allLabel")}</option>
            {constantAllPosts.map((el) => {
              return <option value={el.address}>{el.address}</option>;
            })}
          </select>
        </div>

        <input
          className="postSearch"
          type="search"
          placeholder={t("postPage.searchLabel")}
          onChange={handleSearch}
        />
      </Row>
      <Row className="displaySettings" md={6}>
        <p className="resultsCountLabel">
          {t("postPage.showing")} {posts.length} {t("postPage.results")}
        </p>
        <div>
          <label className="volunteerFilterLabel" id="labelSort">
            {t("postPage.sort")}
          </label>
          <select className="postSort" onChange={handleSort}>
            <option value="title">{t("postPage.sortTitle")}</option>
            <option value="date">{t("postPage.sortDate")}</option>
          </select>
        </div>
      </Row>

      <Row className="postsDisplayed" fluid="md">
        {posts.map((item) => (
          // eslint-disable-next-line max-len
          <Suspense
            fallback={
              <img className="loadingGif" src={loadingGif} alt="loading..." />
            }
          >
            <Post postInfo={item} type={props.collectionName} />
          </Suspense>
        ))}
      </Row>
    </Container>
  );
}
