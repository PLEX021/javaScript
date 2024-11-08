
const readlineSync = require('readline-sync');
const polegadas = Number (readlineSync.question("\nQual e a distancia em polegadas tranformadas em pes?"));

calculodistanciaPolegada = polegadas*0.833333;


console.log("A distancia de polegadas para pes sao:",calculodistanciaPolegadadistanciaPolegada,"polegadas");







/*18.Conversão de unidades (polegadas para pés) – Escreva um algoritmo que peça 
ao usuário uma distância em polegadas e a transforme em pés e polegadas. Por 
exemplo, 86 polegadas equivalem a 7 pés e 2 polegadas. Certifique-se de usar 
constantes quando apropriado.*/