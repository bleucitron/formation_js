'use strict';
console.log('Exos 2-3: Boucles');

/**========================================================================
 *                           Boucles simples
 *========================================================================**/
console.log('*** Boucles simples ***');

/**
 * 1) À l'aide d'une boucle for, affichez dans la console tous les nombres de 4 (inclus) à 17 (exclus)
 * 2) À l'aide d'une boucle for, affichez dans la console tous les nombres de 100 (inclus) à 90 (inclus)
 * 3) À l'aide d'une boucle for, affichez dans la console un nombre sur 3 de 0 (inclus) à 20 (exclus)
 */

for (let i = 4; i < 17; i++) {
  console.log(i);
}
for (let i = 100; i >= 90; i--) {
  console.log(i);
}
for (let i = 0; i <= 20; i = i + 3) {
  console.log(i);
}

/**========================================================================
 *                           Sept
 *========================================================================**/
console.log('*** Sept ***');

/**
 * 1) Affichez dans la console tous les multiples de 7 entre 1 et 1000
 */

for (let i = 1; i <= 1000; i++) {
  if (i % 7 === 0) {
    console.log(i);
  }
}

/**========================================================================
 *                           Paires
 *========================================================================**/
console.log('*** Paires ***');

/**
 * 1) Affichez toutes les paires possibles de nombres entre 0 et 9.
 * (1, 2) et (2, 1) sont considérées 2 paires différentes.
 */

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(i, j);
  }
}

/**========================================================================
 *                           Assurance vie
 *========================================================================**/
console.log('*** Assurance vie ***');

/**
 * 1) Créez une variable money, l'initialiser à 10000
 * 2) Créez une boucle for qui multiplie money par 1.02 tous les 6 mois pendant 30 ans
 * 3) Afficher le résultat
 */

let money = 10000;

for (let months = 1; months <= 30 * 12; months += 6) {
  money *= 1.02;
}

console.log(money);

/**========================================================================
 *                           [Bonus] Carte Bleue
 *========================================================================**/
console.log('*** [Bonus] Carte bleue ***');

/**
 * 1) Créez une variable argent, l'initialiser à 1000
 * 2) Créez une variable cout, l'initialiser à 30
 * 3) À l'aide d'une boucle while, déduire de la variable argent le cout,
 * en vérifiant que l'opération soit toujours possible
 * 4) Combien d'opérations ont pu être effectuées avant de ne plus pouvoir payer ?
 */

let argent = 1000;
const cout = 30;
let iterations = 0;

while (argent - cout > 0) {
  argent -= cout;
  iterations++;
}
console.log('Reste', argent, 'iterations', iterations);

/**
 * 5) Comment retrouver le résultat précédent avec une boucle for ?
 * 6) Comment retrouver ce résultat précédent sans aucune boucle ?
 */
let iterations2 = 0;

for (let argent2 = 1000; argent2 - cout > 0; argent2 -= cout) {
  iterations2++;
}
console.log('iterations', iterations2);

console.log('reste', Math.floor(1000 / 30), 'iterations', 1000 % 30);

/**========================================================================
 *                           [Bonus] Mastercard
 *========================================================================**/
console.log('*** [Bonus] Mastercard ***');

/**
 * 1) Reproduisez l'exercice précédent, avec le changement suivant:
 * - après chaque opération le coût augmente de 5%
 * tant que l'argent restant est plus grand strictement que 500
 * - sinon, le coût diminue de 15%
 * - le coût ne peut pas être plus grand que 45 ni plus petit que 15
 *
 * Combien reste t'il d'argent à la fin des achats ?
 * Combien de fois a t'on payé plus que 30€ ? Moins que 30€ ?
 */
