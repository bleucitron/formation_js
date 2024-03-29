# L'univers Javascript

_Basé sur [Just Javascript](https://justjavascript.com/), de [Dan Abramov](https://twitter.com/dan_abramov)._

## Votre planète

![Le petit Prince](../../images/little_prince.jpg)

Vous êtes sur une petite planète: votre code.

Dans votre code, il y a des variables, des expressions, des mots-clés, des instructions...

Il y a aussi des réassignations de variables, des boucles, des conditions, des appels à des fonctions...

Mais les valeurs, elles, sont plus haut, dans le ciel. **Les valeurs sont fondamentales**, et méritent une attention particulière.

**Les valeurs n'existent pas dans le code**.

[![L'univers Javascript](../../images/universe.png)](https://illustrated.dev/)

## Les étoiles

Les valeurs sont un peu comme des étoiles, que l'on peut regarder depuis sa planète.

Ces étoiles sont plus ou moins lointaines, mais sont toujours disponibles, on peut toujours les regarder.

### Valeurs primitives

Nombres, booléens, strings...

```js
5;
'romain';
undefined;
```

Elles sont comme des étoiles: lointaines, **mon code ne peut pas les affecter**, mais je peux toujours les regarder.

### Objets et fonctions

```js
{};
[]; // tableau
function () {};
```

> Les tableaux sont des objets particuliers.

Elles sont comme les roches de l'anneau de Saturne, proches de votre planète. **Je peux les manipuler depuis mon code**.

## Expressions

Ces sont les questions auxquelles Javascript peut répondre.

```js
2 + 2; // Javascript répond 4

console.log(2 + 2); // Javascript répond 4, puis on affiche 4 dans la console
```

**Une expression renvoie toujours une seule valeur.**

## Types

**Il y a 9 types en Javascript.**

Et c'est tout.

### Valeurs primitives

- Undefined (`undefined`): pour les valeurs non définies par erreur.
- Null (`null`): pour les valeurs non définies intentionellement.
- Booléens (`true`, `false`): pour la logique
- Nombres (`1`, `4.5`, ...): pour les maths
- Strings (`a`, `romain`, ...): pour le texte
- Symbols (abstrait): pour cacher des choses
- BigInt (nouveau): pour les maths sur de grands nombres

### Objets et fonctions

- Objets (`{}`, ...): pour regrouper des données
- Functions (`() => 1`, ...): pour faire référence à du code

---

### _À suivre: [Valeurs et variables](./3-3_variables.md)_
