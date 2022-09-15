'use strict';
console.log('Exos 2-4: Fonctions');

/**========================================================================
 *                           Bonjour
 *========================================================================**/
console.log('*** Bonjour ***');

/**
 * 1) Créer une fonction 'direBonjour' qui:
 * - prend un 'nom' en entrée/argument
 * - renvoie une chaine de caractère de type Bonjour personnalisé (ex: Bonjour Romain).
 *
 * 2) Utiliser cette fonction avec votre prénom en logguant son résultat
 */

function direBonjour(prenom) {
  return 'Bonjour ' + prenom;
}

const resultat = direBonjour('Romain');
console.log(resultat);

/**========================================================================
 *                           Pourcentage
 *========================================================================**/
console.log('*** Pourcentage ***');

/**
 * 1) Créez une fonction "calculer" qui:
 * - prend un nombre en entrée
 * - renvoie ce nombre augmenté de 13%
 *
 * 2) Utilisez cette fonction sur un nombre de votre choix,
 * et afficher son résultat dans la console
 */

function calculer(nb) {
  return nb + (nb * 13) / 100;
}

const nbResultat = calculer(1030);
console.log('nbResultat', nbResultat);

function calculer2(nb, pourcentage) {
  return nb + (nb * pourcentage) / 100;
}

const nbResultat2 = calculer2(1030, 50);
console.log('nbResultat2', nbResultat2);

/**
 * 3) Modifier la fonction "calculer" pour pouvoir choisir également le pourcentage appliqué
 */

/**========================================================================
 *                           [Bonus] Limite
 *========================================================================**/
console.log('*** [Bonus] Limite ***');

/**
 * 1) Créez une fonction 'limit' qui:
 * - prend en entrée un nombre de départ
 * - tant que le nombre est plus grand que 1 / 1_000_000, diviser ce nombre par 2 (boucle while)
 * - renvoie le nombre de fois où on a divisé par 2
 */

function limit(start, tolerance) {
  let nb = 0;
  while (start > 1 / tolerance) {
    start /= 2;
    nb++;
  }

  return nb;
}

console.log('Limite', limit(100, 1_000_000));

/**
 * 2) Modifier cette fonction pour pouvoir fournir en entrée le seuil (1 / 1_000_000)
 */

/**
 * 3) Modifier la fonction "limit" pour faire la même chose sans aucune boucle.
 */

function limit2(start, tolerance) {
  let nb = 0;

  if (start > 1 / tolerance) {
    nb++;
    nb = nb + limit2(start / 2, tolerance);
  }

  return nb;
}

console.log('Limite2', limit2(100, 1_000_000));
