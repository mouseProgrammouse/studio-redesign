import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import HamburgerMenuIcon from "./HamburgerMenuIcon";
import classNames from "classnames";
import { supportedLang } from "../utils/data";
import { sendEvent } from "../utils/analytics";
import { EventTypes } from "../utils/analytics";

const Menu: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { key: "menuItemAboutUs", href: "#AboutUs" },
    { key: "menuItemServices", href: "#Services" },
    { key: "menuItemReviews", href: "#Reviews" },
    { key: "menuItemContactUs", href: "#ContactUs" },
  ];

  return (
    <nav
      className={classNames({ menu: true, "bg-drop": isOpen })}
      role="navigation"
    >
      <div className="desktop-menu">
        <ul>
          {menuItems.map(({ key, href }) => (
            <li key={key}>
              <a
                href={href}
                onClick={() =>
                  sendEvent(EventTypes.MENU_CLICKED, { menuitem: t(key) })
                }
              >
                {t(key)}
              </a>
            </li>
          ))}
          <li aria-label={t("a11ylngSwitcherLabel")} className="lng-selector">
            {supportedLang.map((lng) => (
              <a
                role="button"
                key={lng}
                aria-current={i18n.language === lng ? "true" : undefined}
                className={classNames({ active: i18n.language === lng })}
                aria-label={t(`a11ylngSwitcher${lng.toUpperCase()}`)}
                onClick={() =>
                  sendEvent(EventTypes.LNG_CLICKED, { language: lng })
                }
              >
                {t(lng)}
              </a>
            ))}
          </li>
        </ul>
      </div>

      <div className="mobile-menu">
        <HamburgerMenuIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        <ul className={classNames({ visible: isOpen, hidden: !isOpen })}>
          {menuItems.map(({ key, href }) => (
            <li key={key}>
              <a
                href={href}
                onClick={() => {
                  sendEvent(EventTypes.MENU_CLICKED, { menuitem: t(key) });
                  setIsOpen(false);
                }}
              >
                {t(key)}
              </a>
            </li>
          ))}
          <li aria-label={t("a11ylngSwitcherLabel")} className="lng-selector">
            {supportedLang.map((lng) => (
              <a
                key={lng}
                role="button"
                aria-current={i18n.language === lng ? "true" : undefined}
                className={classNames({ active: i18n.language === lng })}
                aria-label={t(`a11ylngSwitcher${lng.toUpperCase()}`)}
                onClick={() => {
                  sendEvent(EventTypes.LNG_CLICKED, { language: lng });
                  setIsOpen(false);
                }}
              >
                {t(lng)}
              </a>
            ))}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
