// bjjChamp/server/api/src/models/match.js
const pool = require('./db');

const createMatchTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS matches (
      id SERIAL PRIMARY KEY,
      date DATE NOT NULL,
      gi_type VARCHAR(10) NOT NULL,
      training_type VARCHAR(20) NOT NULL,
      gender VARCHAR(10) NOT NULL,
      belt VARCHAR(20) NOT NULL,
      belt_stripes INT DEFAULT 0,
      age VARCHAR(20) NOT NULL,
      gym_name VARCHAR(100),
      master_name VARCHAR(100),
      competition_name VARCHAR(100),
      match_result VARCHAR(10) NOT NULL,
      selected_submissions TEXT[],
      competition_outcome VARCHAR(20),
      score TEXT
    )
  `);
  // Test query to verify table creation
  const testResult = await pool.query('SELECT * FROM matches LIMIT 1');
  console.log('Matches table verified:', testResult.rows.length ? 'Data exists' : 'Table created, no data');
};

createMatchTable().catch(err => console.error('Error creating/verifying matches table:', err));

module.exports = pool;