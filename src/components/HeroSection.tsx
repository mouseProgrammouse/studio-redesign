import React from "react";
import { useTranslation } from "react-i18next";
import { sendEvent } from "../utils/analytics";
import { EventTypes } from "../utils/analytics";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <h1>{t("heroTitle")}</h1>
      <p>{t("heroDescription")}</p>
      <a
        className="button"
        role="button"
        aria-label={t("a11yCTALabel")}
        href="#ContactUs"
        onClick={() => sendEvent(EventTypes.CTA_CLICKED)}
      >
        {t("ctaTitle")}
      </a>
    </section>
  );
};

export default HeroSection;
