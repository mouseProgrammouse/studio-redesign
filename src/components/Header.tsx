import React from "react";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation();

  const cssFile =
    process.env.NODE_ENV === "production" ? "global.min.css" : "global.css";

  return (
    <head>
      <meta charSet="UTF-8" />
      <title>{t("mainTitle")}</title>
      <link rel="icon" href="data:," />
      <link rel="stylesheet" type="text/css" href={cssFile} />
    </head>
  );
};

export default Header;
