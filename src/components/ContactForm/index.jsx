/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./index.css";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import contactUsChannelsImg from "./contactUsChannelsImg.svg";
import ContactWithLoveImg from "./ContactWithLoveImg.svg";
import db from "../../firebaseConfig";
import swal from "sweetalert";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { t } = useTranslation();

  const messageRecieve = (e) => {
    e.preventDefault();
    db.collection("messages").doc(`${name}, ${Date()}`).set({
      fullName: name,
      email,
      message,
    });

    setName("");
    setEmail("");
    setMessage("");
    // eslint-disable-next-line no-alert
    swal("", t("contact.aletMessage"), "success");
  };

  return (
    <div>
      <Row className="contactPageImgsRow">
        <img
          className="contactPageImgs"
          src={contactUsChannelsImg}
          alt="Contact Us"
        />
      </Row>
      <Row className="contactFormRow">
        <Col md={6}>
          <form className="contactFormStyle" onSubmit={messageRecieve}>
            <div className="contactFormAllInputsAndMessageSpaceStyle">
              <label for="name">{t("contact.formName")}</label>
              <br />
              <input
                type="text"
                name="name"
                placeholder={t("contact.formNamePlaceholder")}
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="contactFormInputAndMessageAreaStyle"
                required
              />
            </div>
            <div className="contactFormAllInputsAndMessageSpaceStyle">
              <label for="email">{t("contact.formEmail")}</label>
              <br />
              <input
                type="email"
                name="email"
                placeholder={t("contact.formEmailPlaceholder")}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="contactFormInputAndMessageAreaStyle"
                required
              />
            </div>
            <div className="contactFormAllInputsAndMessageSpaceStyle">
              <textarea
                type="text"
                name="message"
                placeholder={t("contact.formMessagePlaceholder")}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="contactFormInputAndMessageAreaStyle contactFormMessageAreaStyle"
                required
              />
            </div>
            <button type="submit" className="sendButton">
              {t("contact.formButton")}
            </button>
          </form>
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <div className="colTexts getInTouchTextColor">
            <h5>{t("contact.header")}</h5>
            <phone>{t("contact.phone")}</phone>
            <br />
            <email>{t("contact.email")}</email>
            <p>{t("contact.par1")}</p>
            <a href="#" className="youtube social">
              <FontAwesomeIcon icon={faYoutube} size="3x" />
            </a>
            <a href="#" className="facebook social">
              <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
            <a href="#" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="3x" />
            </a>
            <a href="#" className="instagram social">
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
          </div>
        </Col>
      </Row>
      <Row className="contactPageImgsRow">
        <img
          className="contactPageImgs"
          src={ContactWithLoveImg}
          alt="Contact with love"
        />
      </Row>
    </div>
  );
}
