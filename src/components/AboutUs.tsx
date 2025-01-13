import React from "react";
import { useTranslation } from "react-i18next";

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="about-us">
      <p dangerouslySetInnerHTML={{ __html: t("aboutUsDescriptio") }}></p>
    </section>
  );
};

export default AboutUs;
