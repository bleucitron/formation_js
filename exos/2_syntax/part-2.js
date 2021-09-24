'use strict';

console.clear();

// # 2-1_Syntax, Partie 2

console.log('');
console.log('--- PARTIE 2 ---');
console.log('');
console.log('> Ça va boucler sévère !');
/* [1]
  créer une fonction 'x10' qui prend un nombre en entrée et renvoie ce nombre multiplié par 10.
*/

function x10(nombre) {
  return nombre * 10;
}

/* [2]
  créer un nouveau tableau à partir de 'nombres' contenant chaque nombre multiplié par 10, en utilisant 'x10'
  Utiliser une boucle for
*/
const nombres = [23, 12, 57, 178, 139, 434, 222, 1000, 59, 887, 3141];

const mult10 = [];
for (let i = 0; i < nombres.length; i++) {
  const nb = nombres[i];
  const resultat = x10(nb);

  mult10.push(resultat);
}

console.log('Mult10', mult10);

// [2bis] la même chose avec une boucle for ... of
const mult10_2 = [];
for (let element of nombres) {
  const resultat = x10(element);
  mult10_2.push(resultat);
}

console.log('Mult10', mult10_2);

// [2ter] la même chose avec .map
const mult10_3 = nombres.map(x10);
console.log('Mult10', mult10_3);

/* [3] à partir de "nombres", créer un nouveau tableau avec seulement les entiers plus grands que 100
en utilisant une boucle for et if
*/
const plusGrandQue100 = [];
for (let i = 0; i < nombres.length; i++) {
  const element = nombres[i];
  if (element > 100) {
    plusGrandQue100.push(element);
  }
}
console.log('> 100', plusGrandQue100);

// [3bis] la même chose avec .filter
function superieur(nb) {
  return nb > 100;
}
const superieurA100 = nombres.filter(superieur);
console.log('> 100', superieurA100);

/* [4]
  à partir de "nombres", créer un nouveau tableau avec seulement les entiers pairs
  en utilisant .filter()
*/

// [5] créer une fonction 'getLength' qui prend une string en entrée en renvoie sa longueur
function getLength(string) {
  return string.length;
}

const couleurs = ['rouge', 'bleu', 'vert', 'orange', 'violet', 'marron'];

/* [6]
  logguer chacune des valeurs de "couleurs" et leur longueur dans la console
  en utilisant .forEach() et 'getLength'.
  ranger le résultat de couleurs.forEach(...) dans une variable '_longueurs'
*/
const _longueurs = couleurs.forEach(function (couleur) {
  console.log(couleur, getLength(couleur));
});
console.log('_longueurs', _longueurs);

/* [7]
  à partir de couleurs créer un nouveau tableau 'longueurs' contenant toutes les longueurs
  en utilisant .map() et 'getLength'.
  logguer '_longueurs' et 'longueurs', comprendre la différence entre .map et .forEach
*/
const longueurs = couleurs.map(getLength);
console.log('longueurs', longueurs);

console.log('');
console.log("> Si t'en as marre, c'est normal, c'est la fin");

/* [1]
  ajouter 2 ou 3 nouvelles personnes au tableau "personnes", en utilisant .push()
*/
const personnes = [{ nom: 'Romain', date: '1985-12-31' }];
personnes.push(
  { nom: 'Paul', date: '2010-01-12' },
  { nom: 'Sara', date: '1901-01-12' },
);

console.log('Personnes', personnes);

/* [2]
  à partir de "personnes", créer un nouveau tableau contenant seulement les noms en utilisant .map()
*/
const noms = personnes.map(function (p) {
  return p.nom;
});
console.log('Noms', noms);

/* [3]
  créer une fonction "calculerAge" qui en entrée prend un string représentant la date de naissance
  et renvoie l'âge en nombre, en utilisant Date()
*/
function calculerAge(dateEnString) {
  const maintenant = new Date();
  const naissance = new Date(dateEnString);

  const age = maintenant - naissance;

  return Math.floor(age / 1000 / 60 / 60 / 24 / 365.25);
}

console.log('Age', calculerAge('2010-01-12'));
/* [4]
  à partir de "personnes" et "calculerAge", créer un nouveau tableau contenant seulement les âges
*/

const ages = personnes.map(function (personne) {
  const age = calculerAge(personne.date);
  return age;
});
console.log('ages', ages);
