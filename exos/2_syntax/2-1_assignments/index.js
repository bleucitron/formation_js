'use strict';

// Améliorez ce code

let argent = 1000;

let nbGlaces = 8;
let prixGlace = 2;

argent -= nbGlaces * prixGlace;
nbGlaces = 0;

const inflation = 0.04;

prixGlace *= 1 + inflation;

const argentDePoche = 100;
const nbMois = 12;

argent += argentDePoche * nbMois;

const crashBancaire = 5;

argent /= crashBancaire;

console.log('Argent', argent, 436.8);
