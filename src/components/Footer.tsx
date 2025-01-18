import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="container">
        <p dangerouslySetInnerHTML={{ __html: t("studioAddress") }}></p>
        <div>
          <img src="/img/logo.png" />
        </div>
        <p dangerouslySetInnerHTML={{ __html: t("studioContacts") }}></p>
      </div>
    </footer>
  );
};

export default Footer;
