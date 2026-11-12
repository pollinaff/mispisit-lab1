const express = require("express");
const events = require("../actions/events");

const router = express.Router();

router.get("/", async (_req, res, next) => {
  try {
    const items = await events.readAll();
    res.render("notifications/list", {
      title: "Уведомления",
      items,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
