const { pool } = require("../db/pool");

function formatDate(value) {
  if (!value) return "";
  if (typeof value === "string") return value.slice(0, 10);
  const year = value.getFullYear();
  const month = String(value.getMonth() + 1).padStart(2, "0");
  const day = String(value.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatTime(value) {
  if (!value) return "";
  if (typeof value === "string") {
    return value.length >= 5 ? value.slice(0, 5) : value;
  }
  const hours = String(value.getUTCHours()).padStart(2, "0");
  const minutes = String(value.getUTCMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

function mapRow(row) {
  return {
    id: row.id,
    patientName: row.patient_name,
    doctorName: row.doctor_name,
    specialty: row.specialty,
    date: formatDate(row.appointment_date),
    time: formatTime(row.appointment_time),
    status: row.status,
    ownerRole: row.owner_role,
  };
}

async function readAll() {
  const result = await pool.query(
    `SELECT id, patient_name, doctor_name, specialty,
            appointment_date, appointment_time, status, owner_role
     FROM appointments
     ORDER BY id`
  );
  return result.rows.map(mapRow);
}

async function getById(id) {
  const result = await pool.query(
    `SELECT id, patient_name, doctor_name, specialty,
            appointment_date, appointment_time, status, owner_role
     FROM appointments
     WHERE id = $1`,
    [Number(id)]
  );
  if (result.rows.length === 0) return null;
  return mapRow(result.rows[0]);
}

async function create(payload) {
  const result = await pool.query(
    `INSERT INTO appointments
      (patient_name, doctor_name, specialty, appointment_date, appointment_time, status, owner_role)
     VALUES ($1, $2, $3, $4, $5, 'подтверждена', 'patient')
     RETURNING id, patient_name, doctor_name, specialty,
               appointment_date, appointment_time, status, owner_role`,
    [
      payload.patientName.trim(),
      payload.doctorName.trim(),
      payload.specialty.trim(),
      payload.date,
      payload.time,
    ]
  );
  return mapRow(result.rows[0]);
}

module.exports = {
  readAll,
  getById,
  create,
};
