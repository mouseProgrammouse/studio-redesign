import React from "react";
import { useTranslation } from "react-i18next";

const SERVICES: Array<string> = ["Individ", "Opt", "Repair"];

interface Services {
  imgSrc: string;
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
        {services.map((item) => (
          <li key={item.key}>
            <img src={item.imgSrc} alt="" />
            <h3>{t(item.title)}</h3>
            <p>{t(item.description)}</p>
          </li>
        ))}
      </ul>
      <p className="services-description">{t("servicesDescription")}</p>
    </section>
  );
};

export default OurServices;
