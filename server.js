const express = require("express");
const path = require("path");
const appointmentsRouter = require("./routes/appointments");

const app = express();
const PORT = process.env.PORT || 8080;

const PROJECT_NAME = "Электронная система записи к врачу";
const PROJECT_DESCRIPTION =
  "Система онлайн-записи пациентов на приём к врачам городской поликлиники";
const VERSION = "0.0.2";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.locals.projectName = PROJECT_NAME;
  res.locals.projectDescription = PROJECT_DESCRIPTION;
  res.locals.version = VERSION;
  res.locals.currentPath = req.path;
  next();
});

app.get("/", (_req, res) => {
  res.render("index", {
    title: "Главная",
  });
});

app.get("/access-denied", (_req, res) => {
  res.status(403).render("access-denied", {
    title: "Отказ в доступе",
    attemptedAction: "Открыть чужую запись на приём без нужной роли",
    reason:
      "Система отклонила запрос: у текущей роли нет прав на просмотр чужой медицинской записи.",
    actor: "guest",
  });
});

app.use("/appointments", appointmentsRouter);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`${PROJECT_NAME} v${VERSION} on http://0.0.0.0:${PORT}`);
});
