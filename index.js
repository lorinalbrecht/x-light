// index.js
const { addTweet, getAllTweets } = require('./db/tweets');

// Beispiel: Tweet hinzufügen
const id = addTweet('Max', new Date().toISOString(), 'Das ist ein Test-Tweet.');
console.log(`Tweet mit ID ${id} hinzugefügt.`);

// Alle Tweets anzeigen
const tweets = getAllTweets();
console.log('Alle Tweets:', tweets);
