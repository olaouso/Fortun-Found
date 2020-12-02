import React, { useState, useEffect } from "react";
import PostSection from "../../components/ApplactionPagePostSection";
import PostSectionStep1 from "../../components/ApplicationPageStepOne";
import Steps from "../../components/Steps";
import db from "../../firebaseConfig";
import { useParams } from "react-router-dom";
import Chat from "../../components/Chat";
import { Container } from "react-bootstrap";

export default function ApplicationPage() {
  const [post, setPost] = useState("");
  const [steps, setSteps] = useState("stepOne");
  const [meet, setMeet] = useState(false);

  const { postType } = useParams();
  const { id } = useParams();
  const handleSteps = (e) => setSteps("stepTwo");
  const handleMeetSteps = (e) => setMeet(!meet);
  const handleStep1 = (e) => {
    setSteps("stepOne");
    setMeet(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await db.collection(`${postType}`).doc(`${id}`).get();
      const data = res.data();
      setPost(data);
    };
    fetchData();
  }, [id, postType]);
  return (
    <div className="appPageDiv">
      <Container className="appPageContainer">
        <PostSection {...post} />
        <Steps meet={meet} steps={steps} handleStep1={handleStep1} />
        {steps === "stepOne" ? (
          <PostSectionStep1
            {...post}
            meet={meet}
            handleSteps={handleSteps}
            handleMeetSteps={handleMeetSteps}
          />
        ) : (
          <div className="d-flex justify-content-center w-100">
            <Chat />
          </div>
        )}
      </Container>
    </div>
  );
}
