// ### Projet Touitter ###

const button = document.createElement('button');
button.textContent = 'click';

document.body.append(button);

let isFr = false;

async function main() {
  const tweets = await getTweets();

  let ol = createOl(tweets);
  document.body.append(ol);

  button.addEventListener('click', function () {
    isFr = !isFr;

    let newTweets;
    if (isFr) {
      const tweetsFr = [];
      for (let tweet of tweets) {
        if (checkFr(tweet)) {
          tweetsFr.push(tweet);
        }
      }
      newTweets = tweetsFr;
    } else {
      newTweets = tweets;
    }

    const newOl = createOl(newTweets);
    ol.replaceWith(newOl);
    ol = newOl;
  });
}

main();

// [7] créer une variable booléenne isFr, et l'initialiser à false

// [8] inverser la valeur du booléen au clic sur "bouton"

// [9] modifier "bouton" pour pouvoir réafficher tous les tweets quand on reclique dessus
//  Il faut utiliser isFr.

// [10] changer l'intitulé de "bouton" de filtre en fonction de isFr

/**
 * [12] ajoutez un bouton pour récupérer de la donnée supplémentaire à cette URL https://raw.githubusercontent.com/bleucitron/data/master/data/tweets2.json
 * - Essayer d'optimiser le chargement pour éviter d'attendre trop longtemps
 */

// ### BONUS: FILTRES ###

// [1] Récupérer tous les noms des auteurs des tweets, sans doublons

// [2] Afficher les noms sous forme de bouton radio, placés dans un formulaire.

/**
 * [3] À la soumission du formulaire, filtrer les tweets pour n'afficher que ceux de l'auteur sélectionné
 * - faire en sorte que le filtre de langue fasse également partie du formulaire, sous la forme d'un checkbox
 * - le filtre de langue doit continuer à fonctionner
 */

// ### BONUS: LOCALSTORAGE ###

// [1] Rajouter un bouton "fav" à chaque li

/* [2] quand le bouton est cliqué, changer le style du li (rajouter une classe 'fav')
      + et stocker l'ensemble des id_str fav dans le localStorage */

// [3] au chargement de la page, lire le localStorage pour favoriser les favoris.
