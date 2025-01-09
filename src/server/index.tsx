import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { I18nextProvider } from 'react-i18next';
import middleware from 'i18next-http-middleware';
import App from '../App';
import i18n from '../i18n';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/static', express.static('public'));
app.use(middleware.handle(i18n));

app.get('*', (req, res) => {

  const appString = renderToString(
    <I18nextProvider i18n={req.i18n}>
      <App />
    </I18nextProvider>
  );

  const html = `
    <!DOCTYPE html>
    <html lang="${i18n.language}">
      <head>
        <meta charset="UTF-8" />
        <title>Studio</title>
        <link rel="icon" href="data:,">
      </head>
      <body>
        <div id="root">${appString}</div>
      </body>
    </html>
  `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
