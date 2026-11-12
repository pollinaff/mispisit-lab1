const { pool } = require("../db/pool");

function mapRow(row) {
  return {
    id: row.id,
    eventKind: row.event_kind,
    message: row.message,
    appointmentId: row.appointment_id,
    recordLabel: row.record_label,
    status: row.status,
    createdAt: row.created_at,
  };
}

async function readAll() {
  const result = await pool.query(
    `SELECT id, event_kind, message, appointment_id, record_label, status, created_at
     FROM system_events
     ORDER BY id DESC`
  );
  return result.rows.map(mapRow);
}

async function createForAppointment(appointment) {
  const message = `Создана запись на приём: пациент «${appointment.patientName}», врач «${appointment.doctorName}» (${appointment.specialty}), ${appointment.date} ${appointment.time}`;
  const recordLabel = `Запись №${appointment.id}`;
  const result = await pool.query(
    `INSERT INTO system_events
      (event_kind, message, appointment_id, record_label, status)
     VALUES ($1, $2, $3, $4, 'новое')
     RETURNING id, event_kind, message, appointment_id, record_label, status, created_at`,
  [ "appointment_created", message, appointment.id, recordLabel ]
  );
  return mapRow(result.rows[0]);
}

module.exports = {
  readAll,
  createForAppointment,
};
