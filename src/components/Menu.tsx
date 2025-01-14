import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import HamburgerMenuIcon from "./HamburgerMenuIcon";
import classNames from "classnames";

const Menu: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { key: "menuItemAboutUs", href: "#AboutUs" },
    { key: "menuItemServices", href: "#Services" },
    { key: "menuItemReviews", href: "…" },
    { key: "menuItemContactUs", href: "…" },
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
            {i18n.languages.map((lang) => (
              <a
                key={lang}
                href={lang}
                className={classNames({ active: i18n.language === lang })}
                aria-label={t(`a11ylngSwitcher${lang.toUpperCase()}`)}
                role="menuitem"
              >
                {t(lang)}
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
            {i18n.languages.map((lang) => (
              <a
                key={lang}
                href={lang}
                className={classNames({ active: lang === i18n.language })}
                aria-label={t(`a11ylngSwitcher${lang.toUpperCase()}`)}
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                {t(lang)}
              </a>
            ))}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
