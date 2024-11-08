const readlineSync=require("readline-sync");
const moedaUmReal= Number(readlineSync.question("\nQual e a coversao da moeda de um real ?"));
const moedaCinquentaCentavos= Number(readlineSync.question("\nQual e a coversao da moeda de ciquenta centavos ?"));
const moedaVinteECincoCentavos =  Number(readlineSync.question("\nQual e a coversao da moeda de vinte ecinco  centavos ?"));
const moedaDezCentavos = Number(readlineSync.question("\nQual e a coversao da moeda de dez  centavos ?"));
const moedaCincoCentavos = Number(readlineSync.question("\nQual e a coversao da moeda de cinco centavos ?"));
const moedaUmCentavo = Number(readlineSync.question("\nQual e a coversao da moeda de um centavo ?"));


const umReal = moedaUmReal/1.0;
const cinquentaCentavos = moedaCiquentaCentavos/0.50;
const vinteECincoCentavos = moedaVinteECincoCentavos/0.25;
const dezCentavos = moedaDezCentavos/0.10;
const cincoCentavos = moedaCincoCentavos/0.5;
const umCentavo = moedaUmCentavo/0.1;


console.log("A conversao da moeda de um real e:",umReal,"R$");
console.log("A conversao da moeda de ciquenta centavos e:",cinquentaCentavos,"R$");
console.log("A conversao da moeda de vinte e cinco centavos e:",vinteECincoCentavos,"R$");
console.log("A conversao da moeda de dez centavos e:",dezCentavos,"R$");
console.log("A conversao da moeda de cinco centavos e:",cincoCentavos,"R$");
console.log("A conversao da moeda de um centavo e:",um,"R$");




/*21. Troco em moedas – Crie um algoritmo que calcule e exiba a conversão de uma
determinada quantidade em reais em moedas de R$ 1.00, R$ 0.50, R$ 0.25, R$ 
0.10, R$ 0.05 e R$ 0.01. Por exemplo, R$ 3.78 resulta em três moedas de um real, 
uma de cinquenta centavos, duas de dez centavos, uma de 5 centavos e três de 
um centavo.*/