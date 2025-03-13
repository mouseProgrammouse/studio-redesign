import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="container">
        <p dangerouslySetInnerHTML={{ __html: t("studioAddress") }}></p>
        <img className="logo desktop" src="/img/logo.png" alt="" />
        <p
          className="contact"
          dangerouslySetInnerHTML={{ __html: t("studioContacts") }}
        ></p>
      </div>
      <img className="logo mobile" src="/img/logo.png" alt="" />
    </footer>
  );
};

export default Footer;
