import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import HamburgerMenuIcon from "./HamburgerMenuIcon";
import classNames from "classnames";
import { supportedLang } from "../utils/data";

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
        <ul role="menubar">
          {menuItems.map(({ key, href }) => (
            <li key={key} role="menuitem">
              <a href={href}>{t(key)}</a>
            </li>
          ))}
          <li aria-label={t("a11ylngSwitcherLabel")} className="lng-selector">
            {supportedLang.map((lng) => (
              <a
                key={lng}
                href={lng}
                className={classNames({ active: i18n.language === lng })}
                aria-label={t(`a11ylngSwitcher${lng.toUpperCase()}`)}
                role="menuitem"
              >
                {t(lng)}
              </a>
            ))}
          </li>
        </ul>
      </div>

      <div className="mobile-menu">
        <HamburgerMenuIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        <ul
          className={classNames({ visible: isOpen, hidden: !isOpen })}
          role="menubar"
        >
          {menuItems.map(({ key, href }) => (
            <li key={key}>
              <a href={href} role="menuitem" onClick={() => setIsOpen(false)}>
                {t(key)}
              </a>
            </li>
          ))}
          <li aria-label={t("a11ylngSwitcherLabel")} className="lng-selector">
            {supportedLang.map((lng) => (
              <a
                key={lng}
                href={lng}
                className={classNames({ active: lng === i18n.language })}
                aria-label={t(`a11ylngSwitcher${lng.toUpperCase()}`)}
                role="menuitem"
                onClick={() => setIsOpen(false)}
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
