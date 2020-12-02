import React, { useState, useEffect } from "react";
import db from "../../firebaseConfig.js";
import SinglePostHeader from "../../components/SinglePostHeader";
import SinglePostContent from "../../components/SinglePostContent";
import SimilarPosts from "../../components/SimilarPosts";
import { useParams } from "react-router-dom";

export default function SinglePostPage() {
  const [currentPost, setCurrentPost] = useState({});
  const [similarPost, setSimilarPost] = useState([]);
  const { id, postType } = useParams();

  const currentId = id;

  const fetchData = async () => {
    let res = await db.collection(`${postType}`).get();
    const data = res.docs.map((post) => {
      const tmp = post.data();
      const id = post.id;
      if (id === currentId) {
        setCurrentPost({ ...tmp, id });
      }
      return tmp;
    });
    setSimilarPost(data);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="container">
      <SinglePostHeader postHeaderData={currentPost} postType={postType} />
      <SinglePostContent postContentData={currentPost} />
      <SimilarPosts similarPostData={similarPost} />
    </div>
  );
}
