const readlineSync = require('readline-sync');
const valordaCompra = Number(readlineSync.question("\nQual o valor da compra ?;"));



const estadual=valordaCompra*4/100;
const municipal=valordaCompra*2/100;

const valortotal=estadual+municipal+valordaCompra;

console.log("o valor da compra e :",valordaCompra ,"R$");
console.log("o valor da compra e :",estadual,"%");
console.log("o valor da compra e :",municipal,"%");

console.log("o imposto total de vendas:",valortotal ,"R$");








/*8. Imposto sobre vendas – Crie um algoritmo que solicite ao usuário que insira o 
valor da compra. O programa deve calcular os impostos de vendas estadual e 
municipal. Suponha que o imposto estadual sobre vendas seja de 4% e o imposto 
estadual sobre vendas seja de 2%. O programa deve exibir o valor da compra, o 
imposto estadual sobre vendas, o imposto municipal sobre vendas, o imposto 
total sobre vendas e o total da venda (que é a soma do valor da compra mais o 
imposto total sobre vendas). 
Lembrete: 2% =
2
100
= 0,02 e 4% =
4
100
= 0,04
*/















