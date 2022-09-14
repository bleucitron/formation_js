'use strict';

const age = Math.floor(Math.random() * 90);

// [1] créer une variable name, et lui assigner un nom

let nom = 'Romain';

// [2] si age est plus grand que 18, afficher le message suivant
console.log('Age', age);
if (age > 18) {
  const msg1 = 'Bravo pour le permis';
  console.log(msg1);
}

// [3] si age n'est pas entre 12 et 25, afficher le message suivant:
if (age < 12 || age > 25) {
  const msg2 = "Vous n'avez pas le droit à la carte 12-25";
  console.log(msg2);
}

// [4] si age est plus grand que 20, réassigner name en lui ajoutant 'Mr' (ou 'Mme') devant
if (age > 20) {
  nom = 'M. ' + nom;
  console.log(nom);
}
