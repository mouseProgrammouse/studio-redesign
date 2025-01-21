import React from "react";
import { useTranslation } from "react-i18next";
import { EventTypes } from "../utils/analytics";
import { sendEvent } from "../utils/analytics";

const ContactUS: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-us" id="ContactUs">
      <h2>{t("contactUsTitle")}</h2>
      <div className="container">
        <p dangerouslySetInnerHTML={{ __html: t("contactUsDesscription") }}></p>
        <div className="apps">
          <a
            className="viber"
            href={`viber://contact?number=%2B${t("contactUsViber")}`}
            aria-label={t("a11yContactUsViber")}
            onClick={() => sendEvent(EventTypes.VIBER_CLICKED)}
          >
            <img src="/img/viber.svg" />
          </a>
          <a
            className="whatsapp"
            href={`https://api.whatsapp.com/send?phone=${t("contactUsWhatsApp")}`}
            aria-label={t("a11yContactUsWhatsUp")}
            onClick={() => sendEvent(EventTypes.WHATSUP_CLICKED)}
          >
            <img src="/img/whatsUp.svg" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUS;
