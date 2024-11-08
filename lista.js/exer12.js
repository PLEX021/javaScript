const readlineSync = require('readline-sync');
const acoesCompradas= Number(readlineSync.question("\nQual e o valor das ações compradas?;"));
const acaoDaCompra= Number(readlineSync.question("\nQual e o valor de cada ação no momento da compra?;"));
const comissoesCompradas= Number(readlineSync.question("\nQual e o valor do percentual da comissão na compra?;"));
const acaoDaVenda= Number(readlineSync.question("\nQual e o valor de de cada ação no momento da venda?;"));
const comissoesVendidas= Number(readlineSync.question("\nQual e o valor percentual da comissão na venda?;"));


console.log("O valor das ações compradas  :",acoesCompradas);
console.log("O valor de cada ação compradas no momento da compra :",acaoDaCompra);





const calculoDeAcoes =33*1000;
const calculoDeCorretagem = 2/100*calculoDeAcoes;
const duasSemanasDasAcoes = 34*1000;
const pagarNovamente = 2/100*duasSemanasDasAcoes;
const somaDasAcoes = duasSemanasDasAcoes+pagarNovamente;


console.log("A quantia que José pagou pelas ações :",calculoDeAcoes);
console.log( "O valor da comissão que José pagou ao seu corretor quando ele comprouas ações:" ,calculoDeCorretagem);
console.log("A quantia pela qual José vendeu as ações:" ,duasSemanasDasAcoes);
console.log("A quantia de comissão que José pagou ao seu corretor quando ele vendeu as ações : ",pagarNovamente);
console.log(" Mostre a quantia que José ganhou ao vender as ações e pagar o corretor :" ,somaDasAcoes);


///////modificação(

console.log("A quantidade de ações compradas:",acoesCompradas);
console.log("O valor de cada ação no momento da compra:",acaoDaCompra);
console.log("O valor percentual da comissão na compra:",comissoesCompradas);
console.log("O valor de cada ação no momento da venda:",acaoDaVenda);
console.log("O valor percentual da comissão na venda:",comissoesVendidas);




/* Negociação de Ações – No mês passado, José comprou e vendeu algumas ações 
das Lojas Pedroso S.A., conforme detalhado abaixo: 
a. No total, foram compradas 1000 ações. Naquele momento, José pagou 
R$ 33 por cada ação;
b. Pela transação que efetuou, José teve que pagar uma taxa de corretagem 
de 2% sobre o valor pago pelas ações;
c. Duas semanas depois, José vendeu todas as ações que adquirira por R$ 
34 cada uma;
d. Para poder efetuar a venda, José teve que pagar novamente uma 
comissão de 2% do valor da transação
Crie um algoritmo que imprima na tela as seguintes informações:
a. A quantia que José pagou pelas ações;
b. O valor da comissão que José pagou ao seu corretor quando ele comprou 
as ações;
c. A quantia pela qual José vendeu as ações;
d. A quantia de comissão que José pagou ao seu corretor quando ele vendeu 
as ações;
e. Mostre a quantia que José ganhou ao vender as ações e pagar o corretor.
Modificação: Após construir esse algoritmo, modifique-o para que o usuário possa 
fornecer as seguintes informações:
a. A quantidade de ações compradas;
b. O valor de cada ação no momento da compra;
Ministério 
c. O valor percentual da comissão na compra;
d. O valor de cada ação no momento da venda;
e. O valor percentual da comissão na venda.
A partir disso, imprima na tela as mesmas informações como pedido acima*/
