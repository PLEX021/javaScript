const readlineSync = require('readline-sync');
const cincoHoras = Number(readlineSync.question("\nQual a distância que o carro percorrera em 5 horas;?"));
const oitoHoras = Number(readlineSync.question("\nQual a distância que o carro percorrera em 8 horas;?"));
const dozeHoras = Number(readlineSync.question("\nQual a distância que o carro percorrera em 12 hdeoras;?"));

const distancia5=cincoHoras*5;
const distancia8=oitoHoras*8;
const distancia12=dozeHoras*12;


console.log("A distancia de 5 horas :",distancia5 ,"km/hora");
console.log("A distancia de 8 horas:",distancia8 , "km/hora");
console.log("A distancia de 12 horas:",distancia12, "km/hora");


















/*7. Distância percorrida por um automóvel – Supondo que não haja acidentes ou 
atrasos, a distância que um automóvel percorre numa rodovia pode ser 
calculada com a seguinte fórmula:
Distância = velocidade × tempo
Sabendo disso, construa um algoritmo em que o usuário possa informar a 
velocidade em que um carro está viajando e exiba as seguintes informações:
• A distância que o carro percorrerá em 5 horas;
• A distância que o carro percorre em 8 horas;
• A distância que o carro percorrerá em 12 horas.
*/








