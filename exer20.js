const readlineSync=require("readline-sync");
const pedidosDeAdulto = Number(readlineSync.question("Quantas refeicoes o adulto ira pedir?"));
const pedidosDecrianca = Number(readlineSync.question("Quantas refeicoes a crianca ira pedir?"));

const adultos = pedidosDeAdulto*20.00;
const criancas = pedidosDecrianca*12.00;


console.log ("O adulto vai pedir, e pagar:",adultos,"R$","pelas  refeicoes");
console.log ("Acrianca vai pedir, e pagar:",criancas,"R$","pelas refeicoes");






/*20. Jantar Beneficente – O Clube Verde e Cor-de-Rosa está realizando um jantar 
beneficente para arrecadar fundos para uma instituição filantrópica. O preço é 
de R$ 20,00 para adultos e R$ 12,00 para crianças. Para auxiliar a pessoa que irá 
trabalhar no caixa que vende os tickets para o jantar, escreva um algoritmo que 
peça ao usuário o número de refeições de cada tipo (adulto ou criança) que um 
cliente deseja comprar e exiba o total referente somente às refeições de adultos, 
somente às de crianças e, por fim, a todas as refeições. Por exemplo, no caso de 
um cliente que compre 2 tickets para adultos e 4 para crianças, a saída do 
algoritmo seria um texto como “O cliente deve pagar R$ 40,00 pelos 2 tickets de 
refeição para adultos e R$ 48,00 pelos 4 tickets de refeição para crianças, 
totalizando R$ 88,00”. 
Modificação: após criar esse algoritmo, modifique-o para considerar o lucro 
obtido. Para isso, considere que os custos para produzir uma refeição de adulto
e de criança seja de R$ 5,35 e R$ 7,10, respectivamente. Quando o algoritmo 
calcular quanto o cliente deve pagar, deverá exibir tamém o lucro total para cada 
tipo de refeição e o lucro total geral.*/