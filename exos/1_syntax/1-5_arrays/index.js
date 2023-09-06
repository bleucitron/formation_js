'use strict';
console.log('Exos 2-5: Tableaux');

/**========================================================================
 *                           Pop 'n Push
 *========================================================================**/
console.log("*** Pop 'n Push ***");
const nombres = [4, 5, 1, 2, 3, 6];

/**
 * 1) Enlevez des éléments de 'nombres' pour ne garder que [1, 2, 3]
 * 2) Ajoutez des éléments dans 'nombres' pour faire [0, 1, 2, 3, 4, 5, 6]
 */

nombres.pop();
nombres.shift();
nombres.shift();

nombres.unshift(0);
nombres.push(4, 5, 6);

console.log('Nombres', nombres);

/**========================================================================
 *                           A7
 *========================================================================**/
console.log('*** A7 ***');

const speeds = [23, 12, 57, 178, 129, 434, 222, 1000, 59, 887, 134];

/**
 * 1) Logguez chacune des valeurs du tableau speeds dans la console avec une boucle for
 */

const a = 3;

for (let i = 0; i < speeds.length; i++) {
  const speed = speeds[i];

  const correction = moins5(speed);

  if (correction >= 130) {
    console.log('Vous allez trop vite', correction, a);
  }
}

/**
 * 3) Créer une fonction 'moins5' qui en entrée prend un nombre et renvoie le nombre moins 5
 * 4) Changer la boucle de la question 1 pour corriger chaque vitesse avec la fonction 'moins5'.
 * Si le résultat est supérieur à 130, logguer 'Vous allez trop vite !'
 */

function moins5(nb) {
  return nb - 5;
}

/**========================================================================
 *                           Conversions
 *========================================================================**/
console.log('*** Conversions ***');

function direBonjour(name) {
  return 'Bonjour ' + name + ' !';
}

/**
 * 1) Créez un nouveau tableau avec les vitesses en m/s, en utilisant une boucle for.
 * 2) Même chose, en utilisant une boucle for of.
 */
const kmHtoms = 1000 / 3600; // conversion de km/h à m/s

const speedsInMS = [];

for (let i = 0; i < speeds.length; i++) {
  const speed = speeds[i];

  const speedInMS = speed * kmHtoms;
  speedsInMS.push(speedInMS);
}
console.log('in m/s', speedsInMS);

const speedsInMS2 = [];

for (let speed of speeds) {
  const speedInMS = speed * kmHtoms;
  speedsInMS2.push(speedInMS);
}

console.log('in m/s', speedsInMS2);

/**
 * 3) Créez un tableau ne contenant que les vitesses supérieures à 130 km/h
 */

const fastSpeeds = [];

for (let speed of speeds) {
  if (speed > 130) {
    fastSpeeds.push(speed);
  }
}
console.log('fast', fastSpeeds);

/**
 * 4) Créez une fonction pour transformer une vitesse en km/h en vitesse en noeud;
 * 5) Utilisez cette fonction pour créer un tableau des vitesses en noeuds
 */

const ndTokmH = 1.852; // 1 noeud vaut 1.852 km/h
