import React from "react";
import Login from "../../components/LoginPage/Login";
import { Container } from "react-bootstrap";
import friendsBox from "../../components/LoginPage/assets/friendsBox.jpg";
import "./index.css";

export default function LoginContainer() {
  return (
    <div>
      <Container
        className="d-flex flex-column justify-content-center"
        style={{ minHeight: "10em" }}
      >
        <Login />
        <img
          src={friendsBox}
          alt="friends around gifts"
          className="loginImage"
          width="70%"
        />
      </Container>
    </div>
  );
}
