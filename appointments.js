const express = require("express");
const appointments = require("../actions/appointments");

const router = express.Router();

router.get("/", (_req, res) => {
  res.render("appointments/list", {
    title: "Список записей",
    items: appointments.readAll(),
  });
});

router.get("/new", (_req, res) => {
  res.render("appointments/new", {
    title: "Новая запись на приём",
    form: {
      patientName: "",
      doctorName: "",
      specialty: "",
      date: "",
      time: "",
    },
    error: null,
  });
});

router.post("/new", (req, res) => {
  const form = {
    patientName: req.body.patientName || "",
    doctorName: req.body.doctorName || "",
    specialty: req.body.specialty || "",
    date: req.body.date || "",
    time: req.body.time || "",
  };

  const missing = Object.entries(form)
    .filter(([, value]) => !String(value).trim())
    .map(([key]) => key);

  if (missing.length > 0) {
    return res.status(400).render("access-denied", {
      title: "Отказ: пустые данные",
      attemptedAction: "Создать запись на приём с незаполненной формой",
      reason:
        "Система не приняла запрос: обязательные поля не заполнены (ФИО пациента, врач, специальность, дата и время).",
      actor: "Пациент / регистратор",
    });
  }

  const created = appointments.create(form);
  return res.redirect(`/appointments/${created.id}`);
});

router.get("/:id", (req, res) => {
  const role = (req.query.as || "patient").toLowerCase();
  const item = appointments.getById(req.params.id);

  if (!item) {
    return res.status(404).render("access-denied", {
      title: "Отказ: запись не найдена",
      attemptedAction: `Открыть карточку записи №${req.params.id}`,
      reason: "Запись с таким номером отсутствует в системе.",
      actor: role,
    });
  }

  // Демо отказа по роли: гость не может смотреть чужую карточку пациента
  if (role === "guest") {
    return res.status(403).render("access-denied", {
      title: "Отказ: недостаточно прав",
      attemptedAction: `Открыть карточку записи №${item.id} пациента «${item.patientName}»`,
      reason:
        "Роль «гость» не имеет доступа к персональным данным записи. Войдите как пациент или регистратор.",
      actor: "guest",
    });
  }

  return res.render("appointments/show", {
    title: `Запись №${item.id}`,
    item,
  });
});

module.exports = router;
