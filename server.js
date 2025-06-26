require('dotenv').config();

const express = require('express');
const path = require('path');
const Database = require('better-sqlite3');

const db = new Database('tweets.db');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/tweets', (req, res) => {
  const tweets = db.prepare('SELECT * FROM tweets ORDER BY datum DESC').all();
  res.json(tweets);
});

app.post('/api/tweets', (req, res) => {
  const { autor, inhalt } = req.body;
  if (!autor || !inhalt) return res.status(400).json({ error: 'autor und inhalt sind erforderlich' });

  const datum = new Date().toISOString();
  const stmt = db.prepare('INSERT INTO tweets (autor, datum, inhalt) VALUES (?, ?, ?)');
  const info = stmt.run(autor, datum, inhalt);

  res.json({ id: info.lastInsertRowid, autor, datum, inhalt });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
