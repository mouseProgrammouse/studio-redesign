import React from "react";
import { useTranslation } from "react-i18next";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <h1>{t("heroTitle")}</h1>
      <p>{t("heroDescription")}</p>
      <a className="button" role="button" aria-label={t("a11yCTALabel")}>
        {t("ctaTitle")}
      </a>
    </section>
  );
};

export default HeroSection;
