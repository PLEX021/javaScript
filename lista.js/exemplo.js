const readlineSync = require('readline-sync');
const valor = Number(readlineSync.question("Qual e o valor da %?"));
const porcentagem = Number(readlineSync.question("Qual e o valor da %?"));
const calculo1=porcentagem/100*valor;


console.log("\no valor da questao e:",valor);
console.log("\no valor da questao e:",calculo1);





console.log("\n resposta:",porcentagem,"%");


















/* Previsão de vendas – Sabendo que o lucro anual de uma empresa é, tipicamente, 
23% do total de vendas, crie um algoritmo que solicite ao usuário entre com o 
valor projetado do total de vendas e, em seguida, calcule e exiba o lucro que 
deve ser obtido com esse valor. 
Lembrete: 23% =
23
100
= 0,23*/

