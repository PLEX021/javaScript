
const readlineSync = require('readline-sync');
const nome = String(readlineSync.question("\n Qual o seu nome ?"));
const cidade = String(readlineSync.question("\n Qual sua cidade ?"));
const estado = String(readlineSync.question("\n Qual seu estado ?"));
const endereco =  String(readlineSync.question ("Qual e o seu endereco ?"));
const CEP =  Number(readlineSync.question ("Qual e o seu CEP ?"));
const numerodeTelefone =  Number(readlineSync.question ("Qual e o seu numero ?"));
const areadeAtuacaoprofissional =  String(readlineSync.question ("Qual a sua area profissional ?"));




console.log("\nResposta do exercicio A o tipo de String ");
console.log("\no seu nome e:", nome,);
console.log("\na sua cidde e:", cidade,);
console.log("\no endereco dele e:", endereco,);
console.log("\no CEP dele e:", CEP,);
console.log("\no numero dele  e:", numerodeTelefone,);
console.log("\no numero dele  e:", areadeAtuacaoprofissional,);





















/* Informações Pessoais – Crie um algoritmo que peça ao usuário para informar os 
dados abaixo e, depois disso, os imprima na tela:
• Nome;
• Endereço, com cidade, estado e CEP;
• Número de telefone;
• Área de atuação profissional.
*/