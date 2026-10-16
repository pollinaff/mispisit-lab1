const { pool } = require("./pool");

const CREATE_SQL = `
CREATE TABLE IF NOT EXISTS appointments (
  id SERIAL PRIMARY KEY,
  patient_name TEXT NOT NULL,
  doctor_name TEXT NOT NULL,
  specialty TEXT NOT NULL,
  appointment_date DATE NOT NULL,
  appointment_time TIME NOT NULL,
  status TEXT NOT NULL DEFAULT 'подтверждена',
  owner_role TEXT NOT NULL DEFAULT 'patient',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
`;

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function initSchema(maxAttempts = 30, delayMs = 2000) {
  let lastError;
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      await pool.query(CREATE_SQL);
      console.log(`Database schema ready (attempt ${attempt})`);
      return;
    } catch (err) {
      lastError = err;
      console.log(
        `Waiting for database... attempt ${attempt}/${maxAttempts}: ${err.message}`
      );
      await sleep(delayMs);
    }
  }
  throw lastError;
}

module.exports = {
  initSchema,
};
