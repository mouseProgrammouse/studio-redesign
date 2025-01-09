import React from 'react';
import { useTranslation } from 'react-i18next';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("hello")}</h1>
    </div>
  );
};

export default HeroSection;