import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "../App";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18nClient";

const container = document.querySelector("main");

if (container) {
  hydrateRoot(
    container,
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>,
  );
} else {
  console.error("Main container not found. Hydration aborted.");
}
