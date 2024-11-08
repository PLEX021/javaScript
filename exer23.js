const readlineSync=require("readline-sync");
const partidoLiberal= Number(readlineSync.question("\nQual o numero de votos que o PL recebeu na ultima eleicao ?"));
const partidoTrabalhista = Number(readlineSync.question("\nQual o numero de votos que o PT recebeu na ultima eleicao ?"));
const partidoDemocratico = Number(readlineSync.question("\nQual o numero de votos que o PD recebeu na ultima eleicao"));


const liberal = partidoLiberal/100;
const trabalhista = partidoTrabalhista/100;
const democatico = partidoDemocratico/100;

console.log("O numeros de voto que o PL recebeu foi:",liberal,"%");
console.log("O numeros de voto que o PT recebeu foi",trabalhista,"%");
console.log("O numeros de voto que o PD recebeu foi",democatico,"%");





/*23. Percentual de votos – Escreva um algoritmo que aceite os nomes de três 
partidos políticos e o número de votos que cada um recebeu na última eleição 
para prefeito. Exibir a porcentagem de votos que cada partido recebeu*/