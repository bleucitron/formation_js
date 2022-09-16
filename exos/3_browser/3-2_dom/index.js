'use strict';
console.log('Exos 3-2: DOM');

/**========================================================================
 *                           Chirugie
 *========================================================================**/
console.log('*** Chirurgie ***');

/**
 * 1) Changez le texte et la couleur du background de l'élément avec l'id 'main'
 * 2) Comptez les éléments de type 'i'
 * 3) Comptez les 'i' gris, bleus, et rouge
 * 4) Supprimez les éléments avec la classe 'inutile', ainsi que les i bleus et rouge
 * 5) Créez 15 éléments de type 'div', avec la classe 'numero'.
 * Ajoutez en textContent de ces éléments leur numero (entre 1 et 15) et ajoutez les à la 2e section
 */

const elementMain = document.getElementById('main');
elementMain.textContent = 'Au revoir Romain';
elementMain.style.background = 'green';
elementMain.classList.add('blue');

const elementsI = document.querySelectorAll('i');
const nbTotal = elementsI.length;
console.log('Total', nbTotal);

const elementsIBleus = document.querySelectorAll('i.blue');
const nbBleus = elementsIBleus.length;
console.log('Nb bleus', nbBleus);

const elementsIRouges = document.querySelectorAll('i.red');
const nbRouges = elementsIRouges.length;
console.log('Nb rouges', nbRouges);

console.log('Nb gris', nbTotal - nbBleus - nbRouges);

const elementsInutiles = document.querySelectorAll('.inutile, i.blue, i.red');
for (let i = 0; i < elementsInutiles.length; i++) {
  const e = elementsInutiles[i];
  e.remove();
}

// for (let i = 0; i < elementsIBleus.length; i++) {
//   const e = elementsIBleus[i];
//   e.remove();
// }
// for (let i = 0; i < elementsIRouges.length; i++) {
//   const e = elementsIRouges[i];
//   e.remove();
// }

const sections = document.querySelectorAll('section');
const deuxiemeSection = sections[1];

for (let i = 1; i <= 15; i++) {
  const div = document.createElement('div');
  div.classList.add('numero');
  div.textContent = i;

  deuxiemeSection.append(div);
}

/**========================================================================
 *                           Article
 *========================================================================**/
console.log('*** Article ***');

/**
 * 1) Déplacer l'article dans la 1ère section
 * 2) Reproduire programmatiquement l'élément d'article, et l'ajouter à la 2e section
 */

const article = document.querySelector('article');
article.remove();
sections[0].append(article);

const newArticle = document.createElement('article');

const h3 = document.createElement('h3');
h3.textContent = 'Vive les fruits !';
const content = document.createElement('div');
content.classList.add('content');
const footer = document.createElement('footer');
newArticle.append(h3, content, footer);

const p1 = document.createElement('p');
p1.textContent = "Les bananes c'est bon";
const p2 = document.createElement('p');
p2.textContent = 'Les kiwis aussi !';
content.append(p1, p2);

const author = document.createElement('div');
author.classList.add('author');
author.textContent = 'Toto P.';
const date = document.createElement('div');
date.classList.add('date');
date.textContent = 'Le 17 septembre à 18 h 12';
footer.append(author, date);

sections[0].append(newArticle);
