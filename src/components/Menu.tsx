import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Menu: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <button onClick={() => setIsOpen(!isOpen)}>{"TODO:Icon"}</button>
      <ul className={isOpen ? "visible" : "hidden"}>
        <li>
          <a href="…">{t("menuItemAboutUs")}</a>
        </li>
        <li>
          <a href="…">{t("menuItemServices")}</a>
        </li>
        <li>
          <a href="…">{t("menuItemReviews")}</a>
        </li>
        <li>
          <a href="…">{t("menuItemContactUs")}</a>
        </li>
        <li aria-label={t("a11ylngSwitcherLabel")}>
          <a href="…" aria-label={t("a11ylngSwitcherRU")}>
            {t("ru")}
          </a>
          <a href="…" aria-label={t("a11ylngSwitcherUK")}>
            {t("uk")}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
