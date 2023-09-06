function checkFr(tweet) {
  return tweet.lang === 'fr';
}

function createLi(tweet) {
  const li = document.createElement('li');
  const text = document.createElement('p');
  const author = document.createElement('p');
  const date = document.createElement('p');

  li.classList.add('tweet');
  text.classList.add('text');
  author.classList.add('author');
  date.classList.add('date');

  if (checkFr(tweet)) {
    li.classList.add('fr');
  }

  text.textContent = tweet.full_text;
  author.textContent = tweet.user.name;
  date.textContent = tweet.created_at;
  li.append(text, author, date);

  return li;
}

function createOl(tweets) {
  const ol = document.createElement('ol');

  for (let tweet of tweets) {
    const li = createLi(tweet);
    ol.append(li);
  }

  return ol;
}

async function getTweets() {
  const resp = await fetch(
    'https://raw.githubusercontent.com/bleucitron/data/master/data/tweets2.json',
  );
  const data = await resp.json();
  console.log('tweets', data);

  return data;
}
