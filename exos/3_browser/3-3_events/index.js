'use strict';
console.log('Exos 3-3: Évènements');

/**========================================================================
 *                           Couleurs
 *========================================================================**/
console.log('*** Couleurs ***');

/**
 * 1) Créez une <div> pour chaque couleur, avec la class 'color'
 * 2) L'ajouter à l'élément de la page qui a l'id 'exo1'
 * 3) Chaque div doit avoir un fond coloré de sa couleur
 * 4) Chaque div doit afficher en textContent le texte de sa couleur,
 * ainsi que la position de la couleur dans le tableau  (1. white)
 * 5) Au click, chaque div doit changer la couleur du background du body
 */

const colors = [
  'white',
  'blue',
  'red',
  'green',
  'black',
  'grey',
  'orange',
  'purple',
];

const section = document.getElementById('exo1');

for (let i = 0; i < colors.length; i++) {
  const color = colors[i];
  const div = document.createElement('div');

  div.classList.add('color');
  div.textContent = i + 1 + '. ' + color;
  div.style.background = color;

  section.append(div);

  div.addEventListener('click', function () {
    document.body.style.background = color;
  });
}

/**========================================================================
 *                           Taille
 *========================================================================**/
console.log('*** Taille ***');

/**
 * 1) Créez une <section> avec l'id 'exo2', et l'ajouter au body
 * 2) Créez une <div> carrée, de couleur noire, et l'ajouter à la 2e section
 * 3) Lui ajouter un listener au mousemove, qui change sa largeur
 * en fonction de la position en Y de la souris à l'écran (event.clientY)
 */

const section2 = document.createElement('section');
section2.id = 'exo2';
document.body.append(section2);

const carre = document.createElement('div');
carre.classList.add('carre');
section2.append(carre);

carre.addEventListener('mousemove', function (event) {
  carre.style.width = event.clientY + 'px';
});

/**========================================================================
 *                           Clavier
 *========================================================================**/
console.log('*** Clavier ***');

document.body.addEventListener('keydown', function (event) {
  const position = event.key - 1;

  const color = colors[position];

  if (event.key === 'w') {
    console.log('WWWWWWW');
  }

  if (color !== undefined) {
    document.body.style.background = color;
  }
});

/**
 * 1) Faire en sorte de changer la couleur du background du body quand on appuie sur 1, 2, 3...
 * en fonction de la position des boutons de l'exercice Couleurs
 * 2) Faire en sorte de remettre la page dans l'état initial (aucune section sauf exo1)
 * lorsque l'on appuie sur CTRL-R (COMMAND-R)
 * 3) Exécutez chacun des 3 premiers exercices lorsque la page est vide en appuyant sur ENTER
 */

/**========================================================================
 *                           [Bonus] Harry Potter
 *========================================================================**/
console.log('*** [Bonus] Harry Potter ***');

/**
 * 1) Créez une <section> avec l'id 'exoBonus', et l'ajouter au body
 * 2) Créez une <div> pour Harry, avec la classe 'character' et l'ajouter à la section 'exoBonus'
 * 3) La div 'character' a pour enfant une div avec la classe 'name' avec le nom en textContent
 * et une img avec le src correspondant
 * 4) Ajoutez un listener qui, au click, choisit un personnage au hasard
 * puis remplace les infos
 * 5) Essayez de faire la même chose, mais le listener doit recréer de zéro une nouvelle <div>,
 * puis remplacer la <div> courante, et garder le même comportement au click
 */

const characters = [
  {
    name: 'Harry',
    src: 'static/Harry_Potter_character_poster.jpeg',
  },
  {
    name: 'Hermione',
    src: 'static/Hermione_Granger_poster.jpeg',
  },
  {
    name: 'Ron',
    src: 'static/Ron_Weasley_poster.jpeg',
  },
  {
    name: 'Sirius',
    src: 'static/Sirius_Black.jpeg',
  },
  {
    name: 'Rubeus',
    src: 'static/RubeusHagrid.jpeg',
  },
  {
    name: 'Albus',
    src: 'static/Dumbledore_and_Elder_Wand.jpeg',
  },
];
