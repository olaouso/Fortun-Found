import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./index.css";
import friendsBox from "../assets/friendsBox.jpg";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function UpdateProfile() {
  const { t } = useTranslation();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError(t("loginPages.updateLoginInfo.passNotMatch"));
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError(t("loginPages.updateLoginInfo.failUpdate"));
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Container
        className="d-flex flex-column justify-content-center"
        style={{ minHeight: "10em" }}
      >
        <Card className="shadow" style={{ marginTop: "10em" }}>
          <Card.Body className="purpleElements">
            <h2 className="text-center mb-4 purple">
              {t("loginPages.updateLoginInfo.updateProfile")}
            </h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="purpleElements" id="email">
                <Form.Label>{t("loginPages.updateLoginInfo.email")}</Form.Label>
                <Form.Control
                  className="purpleElements"
                  type="email"
                  ref={emailRef}
                  required
                  defaultValue={currentUser.email}
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>
                  {t("loginPages.updateLoginInfo.password")}
                </Form.Label>
                <Form.Control
                  className="purpleElements"
                  type="password"
                  ref={passwordRef}
                  placeholder="Leave blank to keep the same"
                />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>
                  {t("loginPages.updateLoginInfo.passConfirm")}
                </Form.Label>
                <Form.Control
                  className="purpleElements"
                  type="password"
                  ref={passwordConfirmRef}
                  placeholder="Leave blank to keep the same"
                />
              </Form.Group>
              <Button
                disabled={loading}
                className="w-100 updateBtn"
                type="submit"
              >
                {t("loginPages.updateLoginInfo.update")}
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <Link className="greenElements" to="/">
            {t("loginPages.updateLoginInfo.cancel")}
          </Link>
        </div>
        <img
          className="friendsBoxImg"
          src={friendsBox}
          alt="friends around gifts"
          width="80%"
        />
      </Container>
    </>
  );
}
