const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "data", "appointments.json");

function readAll() {
  const raw = fs.readFileSync(DATA_FILE, "utf8");
  return JSON.parse(raw);
}

function writeAll(items) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(items, null, 2), "utf8");
}

function nextId(items) {
  return items.reduce((max, item) => Math.max(max, item.id), 0) + 1;
}

function getById(id) {
  return readAll().find((item) => item.id === Number(id));
}

function create(payload) {
  const items = readAll();
  const item = {
    id: nextId(items),
    patientName: payload.patientName.trim(),
    doctorName: payload.doctorName.trim(),
    specialty: payload.specialty.trim(),
    date: payload.date,
    time: payload.time,
    status: "подтверждена",
    ownerRole: "patient",
  };
  items.push(item);
  writeAll(items);
  return item;
}

module.exports = {
  readAll,
  getById,
  create,
};
