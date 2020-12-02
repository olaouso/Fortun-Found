// 743068888490-2chsv38s7paclkbc1qjd2ktd3jjf2aqf.apps.googleusercontent.com
// lg85eby3A2b9TtGrOq4BSwao

import React from "react";
import googleIcon from "./icons/google.svg";
import "./index.css";
import { useTranslation } from "react-i18next";
import "firebase/auth";
import { auth } from "../../../firebaseConfig";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const { t } = useTranslation();
  const loginWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/userinfo.profile");
    await auth.signInWithPopup(provider);
    history.push("/");
  };

  return (
    <button onClick={loginWithGoogle} className="buttonGoogle">
      <div>
        <img
          src={googleIcon}
          alt="google login"
          className="googleIcon"
          width="40em"
        />
      </div>
      <div className="lgnGoogleText">
        <span className="buttonText">{t("loginPages.login.logInGoogle")}</span>
      </div>
    </button>
  );
}

export default Login;
