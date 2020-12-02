import React, { useRef, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "./index.css";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Login from "../../containers/Login";

const auth = firebase.auth();
const firestore = firebase.firestore();

export default function Chat() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <section>{user ? <ChatRoom /> : <Login />}</section>
    </div>
  );
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(100);
  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="mainScreen">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
        <div>
          <form onSubmit={sendMessage} className="messageBox">
            <input
              className="chatInput"
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
            />
          </form>
        </div>
      </div>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <div className={`message ${messageClass}`}>
      <img alt="googleImage" className="chatUserImg" src={photoURL} />
      <p>{text}</p>
    </div>
  );
}
