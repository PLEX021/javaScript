const readlineSync=require("readline-sync");
const cookies = Number(readlineSync.question("\nQuantos cookies você vai fazer ?"));
const acucar = Number(readlineSync.question("\nQuantas xícaras de açucar você usou?"));
const manteiga = Number(readlineSync.question("\nQuantos xícaras de manteiga você usou?"));
const farinha = Number(readlineSync.question("\nQuantos xícaras de farinha você usou?"));


const biscoitos =48*cookies;
const xicarasDeAcucar =1.5*acucar;
const xicaraDeManteiga =1*manteiga;
const xicaraDeFarinha =2.75*farinha;


console.log("você vai fazer:",biscoitos,"cookies");
console.log("você vai usar:",xicarasDeAcucar,"gramas","xícaras de açucar");
console.log("você vai usar:",xicaraDeManteiga,"gramas","xícaras de manteiga");
console.log("você vai usar:",xicaraDeFarinha,"gramas","xícaras de farinha");


/*15. Ajustador de Ingredientes – Uma receita de biscoito exige os seguintes 
ingredientes para produzir 48 unidades:
a. 1,5 xícaras de açúcar
b. 1 xícara de manteiga
c. 2,75 xícaras de farinha
Crie um algoritmo que pergunte ao usuário quantos cookies ele deseja fazer e 
calcule a quantidade correspondente dos ingredientes. 

Exemplo: as quantidades listadas servem para fazer 48 unidades. Se o usuário 
quisesse produzir 96 unidades (ou seja, o dobro de 48) as quantidades dos 
ingredientes devem ser dobradas: 3 xícaras de açúcar, 1 xícara de manteiga e 4,5 
xícaras de farinha.*/


