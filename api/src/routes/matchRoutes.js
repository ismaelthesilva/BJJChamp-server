// bjjChamp/server/api/src/routes/matchRoutes.js
const express = require('express');
const router = express.Router();
const pool = require('../models/match');

router.get('/matches', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM matches');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/matches', async (req, res) => {
  const {
    date, giType, trainingType, gender, belt, beltStripes, age, gymName, masterName,
    competitionName, matchResult, selectedSubmissions, competitionOutcome, score
  } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO matches (date, gi_type, training_type, gender, belt, belt_stripes, age, gym_name, master_name, competition_name, match_result, selected_submissions, competition_outcome, score) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *',
      [date, giType, trainingType, gender, belt, beltStripes, age, gymName, masterName, competitionName, matchResult, selectedSubmissions, competitionOutcome, score]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;