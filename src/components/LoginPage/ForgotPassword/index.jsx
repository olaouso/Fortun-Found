import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import "./index.css";
import { Container } from "react-bootstrap";
import friendsBox from "../assets/friendsBox.jpg";
import { useTranslation } from "react-i18next";

export default function ForgotPassword() {
  const { t } = useTranslation();
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage(t("loginPages.forgotPassword.alertMessage"));
    } catch {
      setError(t("loginPages.forgotPassword.alertError"));
    }
    setLoading(false);
  }

  return (
    <>
      <Container
        className="d-flex flex-column justify-content-center forgotContainer"
        style={{ minHeight: "10em" }}
      >
        <Card
          className="neumorphism justify-content-center flex-column align-items-center"
          style={{ marginTop: "8em" }}
        >
          <Card.Body className="purpleElemForgotPass">
            <h2 className="text-center mb-4">
              {t("loginPages.forgotPassword.passReset")}
            </h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="inputSize" id="email">
                <Form.Label>{t("loginPages.forgotPassword.email")}</Form.Label>
                <Form.Control
                  className="purpleElemForgotPass"
                  type="email"
                  ref={emailRef}
                  required
                />
              </Form.Group>
              <Button
                disabled={loading}
                className="w-100 ressPassBtn"
                type="submit"
              >
                {t("loginPages.forgotPassword.resetBtn")}
              </Button>
            </Form>
            <div className="w-100 text-center mt-3 greenElemForgotPass">
              <Link className="greenElemForgotPass" to="/login">
                {t("loginPages.forgotPassword.login")}
              </Link>
            </div>
            <div className="w-100 text-center mt-2 purpleElemForgotPass">
              {t("loginPages.forgotPassword.needAccount")}{" "}
              <Link className="greenElemForgotPass" to="/signup">
                {t("loginPages.forgotPassword.signup")}
              </Link>
            </div>
          </Card.Body>
        </Card>

        <img
          className="friendsBoxImg"
          src={friendsBox}
          alt="friends around gifts"
          width="70%"
        />
      </Container>
    </>
  );
}
