'use strict';
import { createRandomNumber, waitACertainTime } from '../../utils/index.js';
console.log('Exos 3-4: Fetch');

/**========================================================================
 *                           Nombre promis
 *========================================================================**/
console.log('*** Nombre promis ***');

/**
 * La fonction 'createRandomNumber' est une fonction asynchrone qui
 * renvoie un nombre au bout d'un certain temps
 * 1) Utiliser cette fonction, et logguez son résultat
 */

const nb = await createRandomNumber();

console.log('NB', nb);

/**========================================================================
 *                           Attente incertaine
 *========================================================================**/
console.log('*** Attente incertaine ***');

/**
 * La fonction 'waitACertainTime' est une fonction asynchrone qui attend un certain temps:
 * - si le temps attendu n'est pas trop long, tout se passe, et on récupère le temps attendu
 * - si le temps attendu est trop long, la fonction génère une erreur et s'arrête
 * 1) Utiliser cette fonction, et logguez le temps attendu
 * 2) Si la fonction a un problème, logguez le problème
 * Bonus) Essayez d'estimer le temps maximum que la fonction est capable d'attendre
 */

try {
  const nb = await waitACertainTime();

  console.log('NB', nb);
} catch (e) {
  console.log('Erreur', e);
}

const allTimes = [];
async function estimate() {
  try {
    const time = await waitACertainTime();
    allTimes.push(time);
    console.log(allTimes);
  } catch (e) {}
}

for (let i = 0; i < 30; i++) {
  estimate();
}

/**========================================================================
 *                           LeMonde
 *========================================================================**/
console.log('*** LeMonde ***');

/**
 * 1) Utilisez fetch pour récupérer la page d'accueil du journal LeMonde
 * - utiliser .text()
 * 2) Affichez le contenu de la page récupérée dans un <p>
 */

/**========================================================================
 *                           Star Wars
 *========================================================================**/
console.log('*** Star Wars ***');

/**
 * 1) Utilisez fetch pour récupérer les données contenues à cette adresse
 * - utilisez .json()
 * 2) Affichez les infos principales du personnage dans votre page
 */
const starWarsUrl = 'https://swapi.dev/api/people/1/';

const p = fetch(starWarsUrl);

console.log('P', p);

async function getFirst() {
  const reponse = await fetch(starWarsUrl);
  const obj = await reponse.json();

  const div = document.createElement('div');
  div.textContent = obj.name;
  document.body.append(div);
}

getFirst();

/**
 * Bonus) Créez une fonction qui permet de récupérer les infos de n'importe quel personnage:
 * - en entrée, fournir un numéro
 * - en sortie, renvoyer les infos traitées (= passées par .json())
 * Affichez dans la page les infos des 5 premiers personnages
 */

const starWarsUrlBase = 'https://swapi.dev/api/people/';

async function getCharacter(n) {
  const reponse = await fetch(starWarsUrlBase + n);
  const obj = await reponse.json();

  const div = document.createElement('div');
  div.textContent = obj.name;
  document.body.append(div);
}

getCharacter(5);

for (let i = 1; i < 15; i++) {
  getCharacter(i);
}
