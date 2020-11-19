'use strict';

// # 5_Asynchrone

/* Exercice 1: Random number
    - Vous avez accès à une fonction createRandomNumber() qui crée une Promesse d'avoir un nombre aléatoire en 0 et 100.
    - Utiliser cette fonction pour récupérer le nombre
    - Si ce nombre est plus grand que 50, afficher "Cool !"
    - Sinon, afficher "Pas cool..."
*/

// const p = createRandomNumber();

// p.then(function (valeurPromise) {
//   console.log('Valeur promise', valeurPromise);

//   if (valeurPromise > 50) {
//     console.log('Cool');
//   } else {
//     console.log('Pas cool...');
//   }
// });

// console.log('P', p);

/* Exercice 2: Temps d'attente
    - Vous avez accès à une fonction waitForNumber() qui crée une Promesse d'attendre un certain temps.
    - Si ce temps est trop long, la Promesse est rejetée, sinon elle est résolue avec le temps d'attente.
    - Utiliser cette fonction pour afficher le temps d'attente lorsque la Promesse est résolue.
    - Tant que la Promesse est rejetée, recommencez
    - Essayer de trouver quel est le temps d'attente maximal
*/

let max = 0;

function wait() {
  waitForNumber()
    .then(function (vp) {
      max = Math.max(max, vp);
    })
    .catch(function (err) {
      wait();
    });
}

for (let i = 0; i < 500; i++) {
  wait();
}

/* Exercice 3: Charger des tweets
    - Vous avez accès à une URL qui contient des tweets.
    - Charger et logguer les tweets en utilisant fetch()
*/

const url =
  'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json';
const url2 =
  'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets2.json';

const data1 = fetch(url);
const data2 = fetch(url2);

const l1 = data1.then(function (httpResp) {
  return httpResp.json();
});

const l2 = data2.then(function (httpResp) {
  return httpResp.json();
});

const lAll = [l1, l2];

Promise.all(lAll)
  .then(function (result) {
    console.log('RESULT', result.flat());
  })
  .catch(function (err) {
    console.log('ERROR', err);
  });
