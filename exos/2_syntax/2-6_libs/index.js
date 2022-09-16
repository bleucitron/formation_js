'use strict';
console.log('Exos 2-6: Libs');

/**========================================================================
 *                           Aléatoire
 *========================================================================**/
console.log('*** Aléatoire ***');

/**
 * 1) Créer une fonction 'lanceDés' qui renvoie un nombre entre 1 et 6.
 *
 * Utiliser
 * - Math.random() (donne un nombre aléatoire >= 0 et < 1)
 * - Math.floor() (tronque le nombre qu'on lui fournit)
 *
 *
 * 2) Utiliser cette fonction pour obtenir un nombre aléatoire entre 1 et 6
 */

function lanceDes(min, max) {
  const n = min + Math.random() * max;
  const entier = Math.floor(n);

  return entier;
}

console.log(lanceDes(2, 54));

/**
 * 3) Modifier la fonction "lanceDés" pour pouvoir choisir la taille du dé (limites inférieures et supérieures)
 */

/**========================================================================
 *                           Noms
 *========================================================================**/
console.log('*** Noms ***');

/**
 * 1) Ajoutez 2 ou 3 personnes au tableaux "personnes", en utilisant .push()
 */

const personnes = [{ nom: 'Romain', date: '1985-12-31' }];
personnes.push(
  { nom: 'Paul', date: '2020-02-10' },
  { nom: 'Sophie', date: '1995-01-30' },
);

/**
 * 2) Créez un nouveau tableau contenant les noms des personnes, passés en minuscules,
 * en utilisant .map() et .toLowercase()
 */

const noms = personnes.map(function (p) {
  return p.nom.toLowerCase();
});
console.log('Noms', noms);

/**
 * 3) Créez un nouveau tableau contenant uniquement les dates d'anniversaires en format "Humain",
 * en utilisant .map() et .toLocateDateString()
 * - transformez la string de date en object Date
 * - pour le format "humain', vous pouvez utiliser 'fr' en locale, et l'objet 'dateFormatOptions'
 */

const dateFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const dates = personnes.map(function (p) {
  const date = new Date(p.date);
  return date.toLocaleDateString('fr', dateFormatOptions);
});
console.log('dates', dates);

/**
 * 4) Créer une fonction "calculerAge" qui en entrée prend un string représentant la date de naissance
 * et renvoie l'âge en années
 * - un âge est une simple durée, soit la différence entre 2 dates.
 * - commencez par calculer l'âge en millisecondes
 */

function calculerAge(dateDeNaissance) {
  const auj = new Date();
  const naissance = new Date(dateDeNaissance);

  const difference = auj - naissance; // age en ms

  const ageEnAnnee = difference / 1000 / 60 / 60 / 24 / 365;

  return ageEnAnnee;
}

console.log(calculerAge('1987-01-12'));

/**
 * 5) À partir de "personnes" et "calculerAge", créer un nouveau tableau contenant seulement les âges.
 */

const ages = personnes.map(function (p) {
  return calculerAge(p.date);
});

console.log('ages', ages);

/**========================================================================
 *                           [Bonus] Say Hello
 *========================================================================**/
console.log('*** [BONUS] Say Hello ***');

const languages = ['fr', 'es', 'de', 'it', 'jp'];

/**
 * 1) Créer une fonction 'prepareHello' qui prend en entrée une langue 'lang' ('fr', 'it', 'es', 'de', ...)
 * et qui, en fonction de la langue, renvoie une fonction anonyme.
 * - la fonction anonyme doit prendre en entrée un 'name'
 * - la fonction anonyme doit renvoyer une string de type "Bonjour [name]"
 * - si on ne passe pas de langue, ou si la langue n'est pas reconnue, utiliser l'anglais par défaut
 * 2) Utiliser "prepareHello" pour créer plusieurs fonctions pour dire bonjour dans plusieurs langues
 * 3) Tester les fonctions créées
 */

function prepareHello(lang) {
  if (lang === 'fr') {
    return function (name) {
      return 'Bonjour ' + name;
    };
  } else if (lang === 'de') {
    return function (name) {
      return 'Hallo ' + name;
    };
  } else if (lang === 'it') {
    return function (name) {
      return 'Ciao ' + name;
    };
  } else if (lang === 'es') {
    return function (name) {
      return 'Hola ' + name;
    };
  } else {
    return function (name) {
      return 'Hello ' + name;
    };
  }
}

const bjrFr = prepareHello('fr');
const bjrDe = prepareHello('de');
const bjrIt = prepareHello('it');
const bjrEs = prepareHello('es');
const bjrEn = prepareHello('en');

console.log(bjrFr('Romain'));
console.log(bjrDe('Romain'));
console.log(bjrIt('Romain'));
console.log(bjrEs('Romain'));
console.log(bjrEn('Romain'));

/**========================================================================
 *                           [Bonus] Mot de passe
 *========================================================================**/
console.log('*** [BONUS] Mot de passe ***');

const letters = 'abcdefghijklmnopqrstuvwxyz';

/**
 * 1) En utilisant la fonction "lanceDés", créez une fonction `getLetter`
 * qui renvoie une lettre aléatoire parmi les lettres de l'alphabet.
 * Vous pouvez utiliser la string "letters".
 */

function getLetter() {
  const position = lanceDes(0, letters.length);
  return letters[position];
}

console.log('Lettre au hasard', getLetter());

/**
 * 2) Créez une fonction "makePassword" qui:
 * - en entrée prend un nombre 'size'
 * - renvoie un string de longueur 'size' construite avec des lettres au hasard
 *
 * Utiliser une boucle for et la fonction "getLetter".
 */

function makePassword(size) {
  let password = '';

  for (let i = 0; i < size; i++) {
    const letter = getLetter();
    password += letter;
  }

  return password;
}

console.log('Mot de passe créé', makePassword(8));

/**
 * 3) Créer une fonction 'makeStrongerPassword' qui:
 * - en entrée prend un nombre 'size' et un booléen 'withNumbers'
 * - renvoie une chaine de caractères avec des lettres aléatoires, selon les règles suivantes.
 *
 * Si 'withNumber' est vrai, faire en sorte qu'un caractère sur deux soit un nombre au hasard.
 * Si 'size' est plus petit que 8, logguer un message d'avertissement, mais créer le password quand même.
 */

function makeStrongerPassword(size, withNumber) {
  let password = '';

  if (size < 8) {
    console.log('Attention, mot de passe faible');
  }

  for (let i = 0; i < size; i++) {
    if (withNumber === true && i % 2 === 1) {
      const number = lanceDes(0, 10);
      password += number;
    } else {
      const letter = getLetter();
      password += letter;
    }
  }

  return password;
}

console.log('Mot de passe faible', makeStrongerPassword(3));
console.log('Mot de passe fort sans nombres', makeStrongerPassword(8, false));
console.log('Mot de passe fort avec nombres', makeStrongerPassword(10, true));
