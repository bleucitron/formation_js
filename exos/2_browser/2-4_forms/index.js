'use strict';
console.log('Exos 3-4: Formulaires');

/**========================================================================
 *                           Couleurs
 *========================================================================**/
console.log('*** Couleurs ***');

const form = document.getElementById('info');
const section = document.querySelector('section');

function createID(data) {
  const article = document.createElement('article');
  const nomP = document.createElement('p');
  const ageP = document.createElement('p');

  nomP.textContent = data.name;
  if (data.age !== '') {
    ageP.textContent = data.age + ' ans';
  }

  article.append(nomP);
  article.append(ageP);
  article.style.background = data.color;

  article.addEventListener('click', function () {
    article.remove();
  });

  return article;
}

form.addEventListener('submit', e => {
  e.preventDefault(); // permet d'éviter de le rechargement de la page
  const data = [...new FormData(form)]; // lit le contenu du formulaire

  const formatted = {}; // formattage de la donnée
  data.forEach(([key, value]) => {
    formatted[key] = value;
  });

  console.log(formatted);

  const carte = createID(formatted);
  section.append(carte);
});

/**
 * 1) À la soumission du formulaire, construire une carte d'identité affichant:
 * - le nom
 * - l'âge
 * - la couleur de fond de la carte doit être la même que la couleur choisie
 *
 * Ajoutez cette carte dans la <section>
 */

// 2) Rendre l'âge optionnel, et conditionner l'affichage du texte correspondant

// 3) Supprimer le candidat lorsque l'on clique dessus
