'use strict';

// # 2-1_Syntax, Partie 1

console.log('--- PARTIE 1 ---');
console.log('');
console.log("> Bienvenue sur l'autoroute A7");

// [1] créer une variable x, et lui assigner un nombre
const x = 123;

// [2] logguer cette variable dans la console avec console.log()
console.log('Ma variable x', x);

/* [3]
  logguer chacune des valeurs de "speeds" dans la console
  en utilisant une boucle for.
*/
const speeds = [23, 12, 57, 178, 129, 434, 222, 1000, 59, 887, 134];

for (let i = 0; i < speeds.length; i++) {
  const vitesse = speeds[i];

  console.log('Vitesse', vitesse);
}

/* [4]
créer une fonction 'moins5' qui en entrée prend un nombre et renvoie le nombre moins 5
puis logguez le résultat de la fonction 'moins5' appliquée sur x.
*/

function moins5(nombre) {
  return nombre - 5;
}

console.log('X', x, 'X corrigé', moins5(x));

/* [5]
changer la boucle de la question 3 pour corriger chaque nombre avec la fonction 'moins5'.
Si le résultat est supérieur à 130, logguer 'Vous allez trop vite !'
*/

for (let i = 0; i < speeds.length; i++) {
  const vitesse = speeds[i];
  const correction = moins5(vitesse);

  console.log('Vitesse', vitesse, 'Corrigée', correction);

  if (correction > 130) {
    console.log('Vous allez trop vite !');
  }
}

console.log('');
console.log('> Merci de réinitialiser votre mot de passe');

/* [1]
  créer une fonction 'getNumber' qui en entrée prend un nombre et renvoie un nombre entier aléatoire
  entre 0 et ce nombre (ex: si on lui passe 4, on veut récupérer, 0, 1, 2 ou 3, au hasard).
  Logguer le résultat de la fonction random appliquée sur x.
  ( Utiliser Math.random() et Math.floor() )
*/

function getNumber(nombre) {
  const random = Math.random(); // nb aléatoire dans l'intervalle [0, 1[
  const ajustement = random * nombre; // nb aléatoire dans l'intervalle [0, nombre[

  const resultat = Math.floor(ajustement); // nb entier aléatoire dans l'intervalle [0, nombre[

  return resultat;
}

console.log('Nb aléatoire entre 0 et', x, '=>', getNumber(x));

/* [2]
  créer une fonction 'getLetter' qui renvoie une lettre au hasard
  parmi la chaine de caractères 'letters'.
*/

const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

console.log('3e lettre:', letters[2]); // i-ème lettre => letters[i - 1]

function getLetter() {
  const position = getNumber(letters.length);

  const letter = letters[position];
  return letter;
}

console.log('Lettre aléatoire', getLetter());

/* [3]
  créer une fonction 'makePassword' qui en entrée prend un nombre 'size'
  et renvoie un mot de cette longueur construit avec des lettres au hasard.
  Utiliser la fonction 'getLetter' ainsi qu'une boucle for.
*/

function makePassword(size) {
  let mot = '';

  for (let i = 1; i < size; i++) {
    const letter = getLetter();
    mot = mot + letter;
  }

  return mot;
}

console.log('Password', makePassword(x));

/* [Bonus]
  créer une fonction 'makeStrongerPassword' qui en entrée prend un nombre 'size' et un booléen 'withNumbers'
  et renvoie une chaine de caractères sur le même principe que précédemment, mais avec les contraintes suivantes:
  - Si 'withNumber' est vrai, faire en sorte qu'un caractère sur deux soit un nombre au hasard.
  - Si 'size' est plus petit que 8, logguer un message d'avertissement, mais créer le password quand même.
*/

console.log('');
console.log('> Dis bonjour à mamie');

/* [1]
  créer une fonction 'bonjour' qui prend un 'name' en entrée
  et qui renvoie une chaine de caractère de type Bonjour personnalisé (ex: Bonjour Romain).
  Utiliser cette fonction avec votre prénom en logguant son résultat
*/

function bonjour(name) {
  const phrase = 'Bonjour ' + name;
  return phrase;
}

console.log('Exécution de bonjour:', bonjour('Michel'));

/* [2]
  sur le même principe, créer une fonction 'bonsoir'
*/

function bonsoir(name) {
  const phrase = 'Bonsoir ' + name;
  return phrase;
}

console.log('Exécution de bonsoir:', bonsoir('Michel'));

/* [3]
  créer une fonction 'saluer', qui en fonction de l'heure, utilise 'bonjour' ou 'bonsoir'.
  Utiliser new Date().getHours() pour avoir l'heure actuelle.
*/

function saluer() {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();

  console.log('Hours', hours, 'Minutes', minutes, 'seconds', seconds);

  if (hours >= 16 && minutes >= 22) {
    console.log(bonsoir('Paul'));
  } else {
    console.log(bonjour('Paul'));
  }
}

saluer();

/* [4]
  en utilisant le tableau de langues 'languages' ainsi qu'une boucle for,
  dire bonjour dans toutes les langues disponibles
*/

const languages = ['fr', 'es', 'de', 'it', 'jp'];

for (let i = 0; i < languages.length; i++) {
  const langue = languages[i];

  if (langue === 'fr') {
    console.log('Salut');
  } else if (langue === 'es') {
    console.log('Hola');
  } else if (langue === 'de') {
    console.log('Hallo');
  } else if (langue === 'it') {
    console.log('Ciao');
  } else if (langue === 'jp') {
    console.log('Konichiwa');
  } else {
    console.log('Hi');
  }
}

/* [Bonus]
  créer une fonction 'prepareHello' qui prend en entrée une langue 'lang' ('fr', 'it', 'es', 'de', ...)
  et qui, en fonction de la langue, renvoie une fonction anonyme qui prend en entrée un 'name',
  et renvoie une chaine de caractères de type Bonjour personnalisé.
  Si on ne passe pas de langue, ou si la langue n'est pas reconnue, l'anglais doit être le défaut.
  Utiliser 'prepareHello' pour créer plusieurs fonctions pour dire bonjour dans plusieurs langues, et les essayer.
*/
