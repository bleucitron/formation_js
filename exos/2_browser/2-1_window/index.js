'use strict';
console.log('Exos 1-1: La fenêtre');

/**========================================================================
 *                           C'est l'heure !
 *========================================================================**/
console.log("*** C'est l'heure ! ***");

/**
 * - afficher l'heure dans la console toutes les secondes en utilisant `setInterval()`
 */

function afficheHeure() {
  const date = new Date().toLocaleTimeString();
  console.log(date);
}

setInterval(afficheHeure, 1000);

const monArticle = document.createElement('article');

const p = document.createElement('p');
p.textContent = 'Coucou';

monArticle.append(p);
// monArticle.className = 'coucou rouge grand';
monArticle.classList.add('coucou');
monArticle.classList.add('rouge');
monArticle.classList.add('grand');
document.body.append(monArticle);

monArticle.classList.toggle('rouge');
monArticle.classList.toggle('rouge');
// monArticle.classList.remove('rouge');
