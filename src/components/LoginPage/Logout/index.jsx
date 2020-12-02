import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import "./index.css";
import { useTranslation } from "react-i18next";

export default function Logout() {
  const { t } = useTranslation();
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError(t("loginPages.logout.alertLogoutFail"));
    }
  }

  return (
    <>
      {error && <Alert variant="danger">{error}</Alert>}
      <Button variant="link logOutBtn" onClick={handleLogout}>
        {t("loginPages.logout.logOut")}
      </Button>
    </>
  );
}
