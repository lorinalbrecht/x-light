const Database = require('better-sqlite3');
const db = new Database('tweets.db');

function addTweet(autor, datum, inhalt) {
  const stmt = db.prepare('INSERT INTO tweets (autor, datum, inhalt) VALUES (?, ?, ?)');
  const info = stmt.run(autor, datum, inhalt);
  return info.lastInsertRowid;
}

function getAllTweets() {
  const stmt = db.prepare('SELECT * FROM tweets ORDER BY datum DESC');
  return stmt.all();
}

function getTweetById(id) {
  const stmt = db.prepare('SELECT * FROM tweets WHERE id = ?');
  return stmt.get(id);
}

module.exports = { addTweet, getAllTweets, getTweetById };
