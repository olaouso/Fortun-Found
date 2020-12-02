import React from "react";
import { useGoogleLogout } from "react-google-login";
import { useTranslation } from "react-i18next";

const clientId =
  "743068888490-2chsv38s7paclkbc1qjd2ktd3jjf2aqf.apps.googleusercontent.com";

function Logout() {
  const { t } = useTranslation();
  const onLogoutSuccess = (res) => {
    alert(t("loginPages.logout.alertSuccess"));
  };

  const onFailure = () => {
    alert(t("loginPages.logout.alertLogoutFail"));
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="googleLogOutBtn">
      <img
        src="./icons/google.svg"
        alt="google logout"
        className="googleIcon"
      ></img>

      <span className="buttonText">{t("loginPages.logout.signout")}</span>
    </button>
  );
}

export default Logout;
