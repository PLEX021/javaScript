const readlineSync = require('readline-sync');
const acre2 = Number(readlineSync.question("\n Quanto e o valor do acre ?"));
const pesQuadrados2 = Number(readlineSync.question("\n Quanto e o valor de pes quadrados ?"));
const hectares2 = Number(readlineSync.question("\n Quanto e o valor de hectares ?"));

const acre = 404686*acre2
const pesQuadrados = 43560*pesQuadrados2
const hectares = 404686*hectares2

console.log("Qual e o valor de acre=",acre,"m²");
console.log("Qual e o valor de pes quadrados=",pesQuadrados,"m²");
console.log("Qual e o valor de hectares=",hectares,"m²");




/*5. Conversor de áreas de terra – Um acre de terra é equivalente a 4.046,86 m2
, a 
43.560 ft2
(pés quadrados) e a 0,404686 hectares. Crie um algoritmo que solicite 
ao usuário que informe a área de um terreno em metros quadrados e mostre as 
áreas correspondentes em acres, pés quadrados e hectares
*/