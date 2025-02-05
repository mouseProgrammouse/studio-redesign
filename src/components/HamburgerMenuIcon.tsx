import React from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

interface HamburgerMenuIconProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerMenuIcon: React.FC<HamburgerMenuIconProps> = ({
  isOpen,
  onClick,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={classNames({ "hamburger-menu": true, "is-active ": isOpen })}
      onClick={() => onClick()}
      tabIndex={0}
      aria-label={isOpen ? t("a11yCloseMenu") : t("a11yOpenMenu")}
      role="button"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default HamburgerMenuIcon;
