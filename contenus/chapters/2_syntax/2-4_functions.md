# [Fonctions](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Fonctions)

> Définir des recettes de code

Les fonctions contiennent du code réutilisable. Elles sont comme des petites lunes autour de
notre planète.

On peut également les voir comme des recettes de cuisine.

```js
function chanter() {
  console.log("♪ LALALA ♬");
}
```

## Définir une fonction

Une fonction a toujours:

- un corps
- une seule sortie

```js
function () {}; // répond undefined

function () {
  return 'gateau';
};
```

**Si on ne précise pas de `return`, la fonction renvoie automatiquement
`undefined`**.

Une fonction a parfois:

- un nom
- une ou plusieurs entrées

```js
function cuisiner(lait, chocolat, beurre) {
  return "gateau";
}

console.log(cuisiner);
```

> Donner un nom à une fonction permet de la réutiliser.

## Exécuter une fonction

On exécute une fonction en ajoutant `()` derrière son nom, et éventuellement en y ajoutant un ou plusieurs arguments.

```js
dormir();
additioner(10, 2);
```

Si la fonction possède `return` dans son corps, alors l'exécution de la fonction
renvoie la valeur de `return`. Sinon l'exécution renvoie `undefined`.

```js
function cuisiner() {
  return "gateau";
}

const dessert = cuisiner(); // dessert pointe vers 'gateau'

function chanter() {
  console.log("Lalalalala");
}

const chanson = chanter(); // chanson pointe vers undefined
```

Tant qu'une fonction n'est pas appelée, les instructions de son corps ne sont
pas exécutées.

```js
function cuisiner() {
  return "gateau";
}
// la fonction n'est pas exécutée

console.log(cuisiner); // affiche la définition de la fonction
// la fonction n'est pas exécutée

console.log(cuisiner()); // affiche gateau
// la fonction a été exécutée
```

## [Fonctions flèche](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es)

On peut également définir des fonctions en utilisant la syntaxe
fléchée.

```js
const saluer = () => {
  console.log("Salut !");
};
```

Les fonctions flèches ont des arguments tout comme les fonctions normales.

```js
const saluer = (nom) => {
  console.log("Je suis ", nom);
};

const saluer = (prenom, nom) => {
  console.log("Je suis ", prenom + " " + nom);
};

// si un seul argument, pas besoin des parenthèses
const saluer = nom => {
  console.log("Je suis ", nom);
};
```

Si la fonction flèche n'a qu'une seule instruction, alors on peut se passer du block. La fonction renvoie automatiquement alors le résultat de l'instruction.

```js
const additioner = (a, b) => a + b;
```

---

## À retenir

- les fonctions permettent de réutiliser du code
- une fonction a en général un nom, une ou plusieurs entrées, des instructions, et une sortie
- les instructions d'une fonction ne sont pas exécutées tant que la fonction n'est pas exécutée
- pour exécuter une fonction, il faut utiliser les `()`
- on peut écrire une fonction sous sa forme fléchée

---

## Exos

- Ouvrir le dossier `/exos/2_syntax/2-4_functions`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `.js`, et vérifier les résultats dans
  votre navigateur

---

### _À suivre: [Tableaux](./2-5_arrays.md)_
