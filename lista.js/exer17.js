const readlineSync=require("readline-sync");
const polegadas = Number(readlineSync.question("\nQual e a distancia de milha covertida para polegadas?"));
const pes = Number(readlineSync.question("\nQual e a distancia de milha covertida para pes?"));
const jardas = Number(readlineSync.question("\nQual e a distancia de milha covertida parajardas?"));




const milhaPolegada =polegadas*63.360;
const milhaPes = pes*5.280;
const milhaJardas = jardas*1760;


console.log ("a distancia de milha para polegada e:",milhaPolegada,"polegadas");
console.log ("a distancia de milha pes e:",milhaPes,"pes");
console.log ("a distancia de milha jardas e:",milhaJardas,"jardas");











/*17. Conversão de unidades (milhas para polegadas, pés e jardas) – Escreva um 
algoritmo que utilize constantes para armazenar o número de polegadas, pés e 
jardas contidas em uma milha (procure essas informações na Internet). Com 
essas constantes, esse algoritmo deve pedir ao usuário que informe uma certa 
distância em milhas e a converta para polegadas, pés e jardas, as quais devem 
ser exibidas junto a um texto explicativo.*/ 