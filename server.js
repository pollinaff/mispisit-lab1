const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

const PROJECT_NAME = "Электронная система записи к врачу";
const PROJECT_DESCRIPTION =
  "Система онлайн-записи пациентов на приём к врачам городской поликлиники";
const VERSION = "0.0.1";

app.get("/", (_req, res) => {
  res.type("html").send(`<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${PROJECT_NAME}</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 720px;
      margin: 48px auto;
      padding: 0 16px;
      line-height: 1.6;
      color: #222;
    }
    h1 { font-size: 1.6rem; margin-bottom: 0.5rem; }
    p { margin: 0.35rem 0; font-size: 1.1rem; }
  </style>
</head>
<body>
  <h1>${PROJECT_NAME}</h1>
  <p>${PROJECT_DESCRIPTION}</p>
  <p>Версия ${VERSION}</p>
  <p>Разработка продолжается</p>
</body>
</html>`);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on http://0.0.0.0:${PORT}`);
});
