import React, { useState } from "react";
import { Container, Form, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import db from "../../firebaseConfig";
import i18next from "i18next";
import swal from "sweetalert";
import "./index.css";

export default function DonatorForm() {
  const [donatorPostData, setDonatorPostData] = useState({});
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);
  i18next.on("languageChanged", (lng) => {
    setCurrentLanguage(lng);
  });
  const handlePostChange = (e, key) => {
    setDonatorPostData({ ...donatorPostData, [key]: e.target.value });
  };
  const { t } = useTranslation();

  const addDonatorPost = (e) => {
    e.preventDefault();
    db.collection("donatorPost").add({
      title: donatorPostData.title,
      lang: currentLanguage,
      type: donatorPostData.type,
      description: donatorPostData.description,
      target: donatorPostData.target,
      profileName: donatorPostData.profileName,
      about: donatorPostData.about,
      address: donatorPostData.address,
      date: donatorPostData.date,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp5nbPgcqswxMK_MlDRX81HF17TFaUPSNRtw&usqp=CAU",
    });
    swal("", t("formsection.SubmitAlert"), "success");
  };

  return (
    <div>
      <Container>
        <Form onSubmit={addDonatorPost}>
          <Form.Group>
            <Form.Label>{t("formsection.DonationType")}</Form.Label>
            <Form.Control
              required
              as="select"
              onChange={(e) => handlePostChange(e, "type")}
            >
              <option value="service">
                {t("formsection.DonationOption1")}
              </option>
              <option value="goods">{t("formsection.DonationOption2")}</option>
              <option value="money">{t("formsection.DonationOption3")}</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>{t("formsection.PostTitle")}</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder={t("formsection.PostTitle")}
              onChange={(e) => handlePostChange(e, "title")}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>{t("formsection.PostDetailsForDonator")}</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={3}
              onChange={(e) => handlePostChange(e, "description")}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>{t("formsection.TargetGroup")} </Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={3}
              onChange={(e) => handlePostChange(e, "target")}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>{t("formsection.ProfileName")} </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder={t("formsection.ProfileName")}
              onChange={(e) => handlePostChange(e, "profileName")}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>{t("formsection.AboutYou")}</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={3}
              onChange={(e) => handlePostChange(e, "about")}
            />
          </Form.Group>
          <Form.Group>
            <Row>
              <Col>
                <Form.Label>{t("formsection.City")}</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder={t("formsection.City")}
                  onChange={(e) => handlePostChange(e, "address")}
                />
              </Col>
              <Col>
                <Form.Label>{t("formsection.ApplicationDate")}</Form.Label>
                <br />
                <Form.Control
                  required
                  type="date"
                  onChange={(e) => handlePostChange(e, "date")}
                />
              </Col>
            </Row>
          </Form.Group>
          <Row className="justify-content-md-center">
            <button className="submitButton" type="submit">
              {t("formsection.Submit")}
            </button>
          </Row>
        </Form>
      </Container>
    </div>
  );
}
