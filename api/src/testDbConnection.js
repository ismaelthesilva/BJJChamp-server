// bjjChamp/server/api/src/testDbConnection.js
require('dotenv').config();
const pool = require('./models/db');

async function testConnection() {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('Database connection successful:', result.rows[0]);
  } catch (err) {
    console.error('Database connection failed:', err.message);
  } finally {
    await pool.end(); // Close the connection
  }
}

testConnection();