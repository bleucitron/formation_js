'use strict';
console.log('Exos 2-5: Tableaux');

/**========================================================================
 *                           Ordre
 *========================================================================**/
console.log('*** Ordre ***');
const nombres = [4, 5, 1, 2, 3, 6];
const nombres2 = [0, 9, 7, 4, 3, 8];

nombres.shift();
nombres.shift();
nombres.pop();
nombres.push(4);
nombres.push(5);
nombres.push(6);

console.log(nombres);

nombres2.sort();
console.log(nombres2);

/**
 * 1) Ordonnez le tableau 'nombres' en utilisant .pop(), .shift(), .push(), .unshift()
 * 2) Ordonnez le tableau 'nombres2' avec .sort()
 */

/**========================================================================
 *                           A7
 *========================================================================**/
console.log('*** A7 ***');

const speeds = [23, 12, 57, 178, 129, 434, 222, 1000, 59, 887, 134];

/**
 * 1) Logguez chacune des valeurs du tableau speeds dans la console avec une boucle for
 * 2) Faire de même avec une boucle .forEach()
 */

console.log('For classique');
for (let position = 0; position < speeds.length; position++) {
  console.log(speeds[position]);
}

console.log('For of');
for (let sp of speeds) {
  console.log(sp);
}

console.log('.forEach');
speeds.forEach(function (speed) {
  console.log(speed);
});

/**
 * 3) Créer une fonction 'moins5' qui en entrée prend un nombre et renvoie le nombre moins 5
 * 4) Changer la boucle des questions 1 et 2  pour corriger chaque vitesse avec la fonction 'moins5'.
 * Si le résultat est supérieur à 130, logguer 'Vous allez trop vite !'
 */

function moins5(nb) {
  const result = nb - 5;
  return result;
}

for (let vitesse of speeds) {
  const corrige = moins5(vitesse);
  console.log('corrigé', corrige);

  if (corrige > 130) {
    console.log('Amende');
  }
}

/**========================================================================
 *                           Conversions
 *========================================================================**/
console.log('*** Conversions ***');

const vitesses = [23, 12, 57, 178, 129, 434, 222, 1000, 59, 887, 134];

/**
 * 1) Créez un nouveau tableau avec les vitesses en m/s, en utilisant une boucle for.
 * 2) Créez un nouveau tableau avec les vitesses en miles/h, en utilisant une boucle for of.
 * 3) Même chose pour créez un tableau avec les vitesses en noeuds, en utilisant .map().
 */

const kmHtoms = 1000 / 3600; // conversion de km/h à m/s
const milesToKm = 1.61; // 1 miles vaut 1.61 km
const ndTokmH = 1.852; // 1 noeud vaut 1.852 km/h

console.clear();
const vitesses2 = [];
for (let vitesse of vitesses) {
  const v = vitesse * kmHtoms;
  vitesses2.push(v);
}

const vitesses3 = [];
for (let position = 0; position < vitesses.length; position++) {
  const vitesse = vitesses[position];
  const v = vitesse / milesToKm;

  vitesses3.push(v);
}

console.log('Vitesses km/h', vitesses);
console.log('Vitesses m/s', vitesses2);
console.log('Vitesses mph', vitesses3);

// const rapides = [];
// for (let vitesse of vitesses) {
//   if (vitesse > 130) {
//     rapides.push(vitesse);
//   }
// }

const rapides = vitesses.filter(function (v) {
  return v > 130;
});
console.log('Rapide', rapides);

/**
 * 4) Créez une fonction pour transformer une vitesse en km/h en vitesse en noeud;
 * 5) Utilisez cette fonction pour simplifier la question 3)
 * 6) Créez un tableau filtré avec uniquement les vitesses en km/h supérieures à 130 km/h
 */

/**========================================================================
 *                           [Bonus] Pokemons
 *========================================================================**/
console.log('*** [Bonus] Pokemons ***');

/**
 * 1) Trouvez toutes les types uniques de Pokemons à partir du tableau de données pokemons
 */
import { pokemons } from '../../utils/index.js';
