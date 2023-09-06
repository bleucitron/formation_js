'use strict';
console.log('Exos 4-2: Fetch');

/**========================================================================
 *                           Meta HTML
 *========================================================================**/
console.log('*** Meta HTML ***');

/**
 * 1) Utilisez fetch pour récupérer la page test.html
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
const starWarsUrl = 'https://swapi.dev/api/people/';
const firstUrl = 'https://swapi.dev/api/people/1/';

async function getCharacter() {
  const resp = await fetch(firstUrl);
  const data = await resp.json();

  const article = document.createElement('article');
  const name = document.createElement('p');
  const height = document.createElement('p');

  name.textContent = data.name;
  height.textContent = data.height;

  article.append(name, height);
  document.body.append(article);
}

// getCharacter();

async function getNumber(nb) {
  const resp = await fetch(starWarsUrl + nb);
  const data = await resp.json();

  return data;
}

function createArticle(data) {
  const article = document.createElement('article');
  const name = document.createElement('p');
  const height = document.createElement('p');

  name.textContent = data.name;
  height.textContent = data.height;

  article.append(name, height);
  document.body.append(article);
}

async function getAllSequential() {
  for (let i = 1; i <= 5; i++) {
    const d = await getNumber(i);
    createArticle(d);
  }
}

// getAllSequential();

async function getAllParallel() {
  const promises = [];

  for (let i = 1; i <= 5; i++) {
    const d = getNumber(i);
    promises.push(d);
  }

  const allData = await Promise.all(promises);

  for (let personnage of allData) {
    createArticle(personnage);
  }
}

getAllParallel();

/**
 * Bonus) Créez une fonction qui permet de récupérer les infos de n'importe quel personnage:
 * - en entrée, fournir un numéro
 * - en sortie, renvoyer les infos traitées (= passées par .json())
 * Affichez dans la page les infos des 5 premiers personnages
 */
