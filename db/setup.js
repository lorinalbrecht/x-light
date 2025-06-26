const Database = require('better-sqlite3');
const db = new Database('tweets.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS tweets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    autor TEXT NOT NULL,
    datum TEXT NOT NULL,
    inhalt TEXT NOT NULL
  );
`);

db.close();
