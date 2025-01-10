import React from "react";
import { useTranslation } from "react-i18next";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("heroTitle")}</h1>
      <p>{t("heroDescription")}</p>
    </div>
  );
};

export default HeroSection;
