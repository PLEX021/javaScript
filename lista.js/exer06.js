const readlineSync = require('readline-sync');
const celular = Number(readlineSync.question("\n Quanto e o valor do celular ?"));
const bolsa= Number(readlineSync.question("\n Quanto e o valor da bolsa ?"));
const tomada = Number(readlineSync.question("\n Quanto e o valor da tomada ?"));
const fogao= Number(readlineSync.question("\n Quanto e o valor do fogao ?"));
const computador = Number(readlineSync.question("\n Quanto e o valor do computador ?"));

const valordoCelular=celular*6/100;
const valorBolsa=bolsa*6/100;
const valorTomada=tomada*6/100;
const valorFogao=fogao*6/100;
const valorComputador=computador*6/100;

const oSubtotaldosprodutos=celular+bolsa+tomada+fogao+computador;
const calculodeTodes=valordoCelular+valorBolsa+valorTomada+valorFogao+valorComputador;

console.log("valor do celular da porcentagem:",valordoCelular,"%");
console.log("valor da bolsa da porcentagem:",valorBolsa,"%");
console.log("valor da tomada da porcentagem :",valorTomada,"%");
console.log("valor do fogao da porcentagem :",valorFogao,"%");
console.log("valor do computador da porcentagem :",valorComputador,"%");

console.log("valor total  dos produtos :",oSubtotaldosprodutos,"R$");
console.log("valor da porcentagem de todos os produtos :",calculodeTodes,"%");












/*6. Valores de uma Compra – Um cliente de uma loja está comprando cinco 
produtos. Crie um algoritmo que solicite o preço de cada um desses produtos e, 
em seguida, exiba o subtotal da venda, o valor do imposto e o valor total
(subtotal da venda mais o valor do imposto). Suponha que a alíquota do imposto 
seja de 6% sobre o subtotal da venda?*/