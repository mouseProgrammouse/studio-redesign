import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { I18nextProvider } from "react-i18next";
import middleware from "i18next-http-middleware";
import App from "../App";
import path from "node:path";
import i18n from "../../i18nServer";

// eslint-disable-next-line
require("dotenv").config(); // Load .env variables into process.env

const app = express();
const PORT = process.env.PORT || 3000;
const cssFile =
  process.env.NODE_ENV === "production" ? "global.min.css" : "global.css";

app.use(express.static(path.join(__dirname, "public")));
app.use(middleware.handle(i18n));

app.get("*", (req, res) => {
  const initialI18nStore = JSON.stringify(req.i18n.store.data);
  const initialLanguage = req.i18n.language;

  const appString = renderToString(
    <I18nextProvider i18n={req.i18n}>
      <App />
    </I18nextProvider>,
  );

  const html = `
    <!DOCTYPE html>
    <html lang="${initialLanguage}">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>${i18n.t("mainTitle")}</title>
        <link rel="icon" href="data:," />
        <link rel="stylesheet" type="text/css" href="${cssFile}" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
        <script>
          window.initialI18nStore = ${JSON.stringify(initialI18nStore)};
          window.initialLanguage = "${initialLanguage}";
      </script>
      </head>
      <body>
        <main>${appString}</main>
      </body>
      <script src="/bundle.js"></script>
    </html>
  `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
