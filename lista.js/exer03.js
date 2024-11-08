const readlineSync = require('readline-sync');
const irmaos =  Number(readlineSync.question ("Quantos irmaos voce tem ?"));
const conceito = String(readlineSync.question("\n Qual o seu conceito da aula ?"));
const classe = Number(readlineSync.question ( "\n Qual e a media da idade dos estudantes dessa classe ?"));
const idade = Number(readlineSync.question("\n Que idade voce tem?"));




console.log("\nele(a) tem:", irmaos,"irmaos!");
console.log("\no conceito da aula foi:", conceito,);
console.log("\nele(a) tem:", idade,"anos de idade!");
console.log("\nmedia de estudantes:", classe,"media de estudantes");