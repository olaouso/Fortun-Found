import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./index.css";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../contexts/AuthContext";
import GoogleLogin from "../GoogleLogin/";

export default function Login() {
  const { t } = useTranslation();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
      alert(t("loginPages.login.alertLoginSuccess"));
    } catch {
      setError(t("loginPages.login.alertFailLogin"));
    }

    setLoading(false);
  }

  return (
    <>
      <Card
        className="neumorphism justify-content-center flex-column align-items-center "
        style={{ marginTop: "4em" }}
      >
        {/* shadow class is a bootstrap class */}
        <Card.Body className="purpleElemLogin">
          <h2 className="text-center mb-4">{t("loginPages.login.logIn")}</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="purpleElemLogin inputSize" id="email">
              <Form.Label>{t("loginPages.login.email")}</Form.Label>
              <Form.Control
                className="purpleElemLogin"
                type="email"
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label className="purpleElemLogin">
                {t("loginPages.login.password")}
              </Form.Label>
              <Form.Control
                className="purpleElemLogin"
                type="password"
                ref={passwordRef}
                required
              />
            </Form.Group>
            <div className="loginBtns">
              <Button disabled={loading} className="logInBtn" type="submit">
                {t("loginPages.login.logIn")}
              </Button>
              <GoogleLogin />
            </div>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link className="greenElemLogin" to="/forgot-password">
              {t("loginPages.login.forgotPass")}
            </Link>
            <div className="w-100 text-center mt-2 purpleElemLogin">
              {t("loginPages.login.needAcc")}{" "}
              <Link className="greenElemLogin" to="/signup">
                {t("loginPages.login.signUp")}
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
