import React from "react";
import { useTranslation } from "react-i18next";

const SERVICES: Array<string> = ["Individ", "Opt", "Repair"];

interface Services {
  imgSrc: string;
  imgFallback: string;
  title: string;
  description: string;
  key: string;
}

const OurServices: React.FC = () => {
  const { t } = useTranslation();

  const services = SERVICES.reduce(
    (acc: Array<Services>, serviceType: string) => {
      acc.push({
        imgSrc: `/img/service${serviceType}.png`,
        imgFallback: `/img/webp/service${serviceType}.webp`,
        title: `services${serviceType}Title`,
        description: `services${serviceType}Description`,
        key: serviceType,
      });
      return acc;
    },
    [] as Array<Services>,
  );

  return (
    <section className="services" id="Services">
      <h2>{t("servicesTitle")}</h2>
      <ul>
        {services.map((service) => (
          <li key={service.key}>
            <picture>
              <source srcSet={service.imgFallback} type="image/webp" />
              <img src={service.imgSrc} alt="" />
            </picture>
            <h3>{t(service.title)}</h3>
            <p>{t(service.description)}</p>
          </li>
        ))}
      </ul>
      <p className="services-description">{t("servicesDescription")}</p>
    </section>
  );
};

export default OurServices;
