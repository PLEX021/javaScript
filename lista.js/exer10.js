const readlineSync = require('readline-sync');
const valorDaRefeicao= Number(readlineSync.question("\nQual e o valor da refeicao?;"));
const valorDosImpostos=valorDaRefeicao*7/100;
const valorDaGorjeta=valorDaRefeicao*15/100;
const valorTotal=valorDaRefeicao+valorDaGorjeta+valorDosImpostos;


console.log("Valor da refeicao e igual a:",valorDaRefeicao);
console.log("Valor dos imposto e igual a:",valorDosImpostos);
console.log("Valor da gorjeta e igual a:",valorDaGorjeta);
console.log("Valor total  e igual a:",valorTotal);









//10. Gorjeta, Imposto e Total Pago por uma Refeição – Crie um algoritmo que peça 
//para o usuário informar o valor de uma refeição num restaurante.

//A partir desse
//valor, o algoritmo deverá calcular o valor da gorjeta (15% sobre o valor da 
//refeição)
//, dos impostos (7% do valor da refeição)
 //e o total a ser pago (valor da 
//refeição mais os valores da gorjeta e dos impostos). Ao final, o algoritmo deverá 
//exibir cada um desses valores e o total
