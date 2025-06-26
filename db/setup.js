// db/setup.js
const Database = require('better-sqlite3');
const db = new Database('tweets.db');

// Tabelle erstellen, wenn sie nicht existiert
db.exec(`
  CREATE TABLE IF NOT EXISTS tweets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    autor TEXT NOT NULL,
    datum TEXT NOT NULL,
    inhalt TEXT NOT NULL
  );
`);

console.log('Datenbank und Tabelle "tweets" wurden erstellt.');
db.close();
