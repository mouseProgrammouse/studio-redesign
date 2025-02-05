import React from "react";
import { useTranslation } from "react-i18next";

const Map: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="map">
      <iframe
        width="100%"
        height="450"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAP_API_KEY}&q=Танюша, Blahovisna St, 144, Cherkasy, Cherkasy Oblast, Ukraine, 18007&zoom=18`}
        title={t("a11yMap")}
      ></iframe>
    </div>
  );
};

export default Map;
