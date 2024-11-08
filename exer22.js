const readlineSync=require("readline-sync");
const unidades= Number(readlineSync.question("\nQual e a coversao de minutos para horas e dias?"));


const horas = unidades/60;
const dias = unidades/1.440;


console.log("A conversao de minutos para horas sao:",horas);
console.log("A conversao de minutos para dias sao:",dias);








/*22. Conversão de unidades (minutos para horas e dias) - Escreva um programa que 
aceite uma quantidade de minutos e o converta em horas e dias. Por exemplo, 
6.000 minutos equivalem a 100 horas e é igual a 4.167 dia*/