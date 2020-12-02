import React from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./index.css";
import logo from "./img/logo.png";
import languageIcon from "./img/languageIcon.png";
import Logout from "../LoginPage/Logout";
import { useAuth } from "../../components/contexts/AuthContext";
import {
  Navbar,
  Nav,
  DropdownButton,
  Dropdown,
  Button,
  NavDropdown,
} from "react-bootstrap";

export default function SiteNavbar() {
  const { t, i18n } = useTranslation();
  const { currentUser } = useAuth();

  let history = useHistory();

  function handleClickLogin() {
    history.push("/login");
  }

  function handleClickSignup() {
    history.push("/signup");
  }
  const selectLanguage = (language) => {
    if (language === "ar") {
      i18n.changeLanguage("ar");
      document.documentElement.style.setProperty("direction", "rtl");
    } else {
      i18n.changeLanguage(language);
      document.documentElement.style.setProperty("direction", "ltr");
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const LANG_SPECS = [
    {
      code: "ar",
      name: "AR",
    },
    {
      code: "en",
      name: "En",
    },
    {
      code: "tr",
      name: "TR",
    },
  ];

  return (
    <Navbar expand="lg" className="navMainClass">
      <Navbar.Brand href="/">
        <img src={logo} alt="logo" className="logoImg" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" className="navMainClass">
            {t("navbarsection.Home")}
          </Nav.Link>
          <NavDropdown title={t("navbarsection.Posts")}>
            <NavDropdown.Item className="navDropdownItem" href="/donatePosts">
              {t("navbarsection.DonationPosts")}
            </NavDropdown.Item>
            <NavDropdown.Item className="navDropdownItem" href="/receivePosts">
              {t("navbarsection.ReceivingPosts")}
            </NavDropdown.Item>
          </NavDropdown>
          {currentUser && (
            <Nav.Link href="/donate" className="navMainClass">
              {t("navbarsection.Donate")}
            </Nav.Link>
          )}
          <Nav.Link href="/about" className="navMainClass">
            {t("navbarsection.AboutUs")}
          </Nav.Link>
          <Nav.Link href="/contact" className="navMainClass">
            {t("navbarsection.ContactUs")}
          </Nav.Link>
        </Nav>

        {currentUser ? (
          <>
            <div className="loggedInUserInfo">
              {t("navbarsection.LoggedInAs")} {currentUser.email}
            </div>
            <Logout />
          </>
        ) : (
          <>
            <Button onClick={handleClickLogin} className="navButtons">
              {t("navbarsection.LogIn")}
            </Button>
            <Button
              onClick={handleClickSignup}
              className="navButtons signUpLogoutButton"
            >
              {t("navbarsection.SignUp")}
            </Button>
          </>
        )}
        <DropdownButton
          alignRight
          variant="none"
          className="languageIcon"
          title={
            <img
              src={languageIcon}
              className="languageIconImg"
              alt="Language icon"
            />
          }
        >
          {LANG_SPECS.map((lang) => {
            return (
              <Dropdown.Item
                as="button"
                key={lang.code}
                onClick={() => {
                  selectLanguage(lang.code);
                }}
              >
                {lang.name}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
      </Navbar.Collapse>
    </Navbar>
  );
}
