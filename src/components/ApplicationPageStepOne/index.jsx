import React from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";

export default function PostSectionStepOne(props) {
  const { t } = useTranslation();
  return (
    <Container>
      <div className="stepOneApplicationPage">
        <div md={4}>
          <h2 className="prerequisites">
            {props.prerequisites
              ? t("applicationPageStep1.Prerequisites")
              : t("applicationPageStep1.target")}
          </h2>
          <p className="prerequisitesDescription">
            {props.prerequisites ? props.prerequisites : props.target}
          </p>
          <input
            type="checkbox"
            name="radiobutton"
            value={!props.meet}
            onChange={props.handleMeetSteps}
          />
          <label
            htmlFor="radiobutton"
            className=" prerequisitesDescription meet"
          >
            {props.prerequisites
              ? t("applicationPageStep1.MeetPrerequisites")
              : t("applicationPageStep1.MeetTarget")}
          </label>
        </div>
        <div>
          {props.meet && (
            <Button
              className="navButtons nextButton"
              onClick={props.handleSteps}
            >
              {t("applicationPageStep1.Next")}
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
}
