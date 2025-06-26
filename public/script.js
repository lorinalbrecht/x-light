const toggle = document.getElementById('form-toggle');
const form = document.getElementById('tweet-form');
const arrow = document.getElementById('toggle-arrow');

toggle.addEventListener('click', () => {
  form.classList.toggle('collapsed');
  arrow.textContent = form.classList.contains('collapsed') ? '▼' : '▲';
});

async function ladeTweets() {
  const res = await fetch('/api/tweets');
  const tweets = await res.json();
  const list = document.getElementById('tweet-list');
  list.innerHTML = '';
  tweets.forEach(tweet => {
    const el = document.createElement('div');
    el.className = 'tweet';
    el.innerHTML = `
      <div class="meta">${tweet.autor} – ${new Date(tweet.datum).toLocaleString()}</div>
      <div class="inhalt">${tweet.inhalt}</div>
    `;
    list.appendChild(el);
  });
}

document.getElementById('tweet-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const autor = document.getElementById('autor').value;
  const inhalt = document.getElementById('inhalt').value;

  const res = await fetch('/api/tweets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ autor, inhalt })
  });

  if (res.ok) {
    document.getElementById('autor').value = '';
    document.getElementById('inhalt').value = '';
    form.classList.add('collapsed');
    arrow.textContent = '▼';
    ladeTweets();
  } else {
    alert('Fehler beim Hinzufügen des Tweets');
  }
});

ladeTweets();
