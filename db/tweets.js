// db/tweets.js
const Database = require('better-sqlite3');
const db = new Database('tweets.db');

// Tweet einfügen
function addTweet(autor, datum, inhalt) {
  const stmt = db.prepare('INSERT INTO tweets (autor, datum, inhalt) VALUES (?, ?, ?)');
  const info = stmt.run(autor, datum, inhalt);
  return info.lastInsertRowid;
}

// Alle Tweets abrufen
function getAllTweets() {
  const stmt = db.prepare('SELECT * FROM tweets ORDER BY datum DESC');
  return stmt.all();
}

// Einzelnen Tweet abrufen
function getTweetById(id) {
  const stmt = db.prepare('SELECT * FROM tweets WHERE id = ?');
  return stmt.get(id);
}

module.exports = { addTweet, getAllTweets, getTweetById };
