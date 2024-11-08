const readlineSync = require('readline-sync');
const irmaos =  Number(readlineSync.question ("Quantos irmaos voce tem ?"));
const conceito = String(readlineSync.question("\n Qual o seu conceito da aula ?"));
const classe = Number(readlineSync.question ( "\n Qual e a media da idade dos estudantes dessa classe ?"));
const idade = Number(readlineSync.question("\n Que idade voce tem ?"));
const populacao = Number(readlineSync.question("\nQual e a  populacao da terra ?"));
const temperatura = Number(readlineSync.question("\nQual e a temperatura media de ontem ?"));
const novela = String(readlineSync.question("\n Qual o nome de uma novela brasileira ?"));
const potencia = Number(readlineSync.question("\n Qual e a potencia nominal de uma lampada ?"));
const potenciaReal = Number(readlineSync.question("\n Qual e a potencia real de uma lampada ?"));
const municipio = Number(readlineSync.question("\n Qual o numero de populacao que e um municipio ?"));


console.log("\nResposta do exercicio A o tipo de Number ");
console.log("\nele(a) tem:", irmaos,"irmaos!");
console.log("\nResposta do exercicio B o tipo de String ");
console.log("\no conceito da aula foi:", conceito,);
console.log("\nResposta do exercicio C o tipo de Number ");
console.log("\nele(a) tem:", idade,"anos de idade!");
console.log("\nResposta do exercicio C o tipo de Number ");
console.log("\nmedia de estudantes:", classe,"media de estudantes");
console.log("\nResposta do exercicio D o tipo de Number ");
console.log("\npopulacao da terra:", populacao,"populacao");
console.log("\nResposta do exercicio G o tipo de Number ");
console.log("\ntemperatura de ontem:", temperatura,"temperatura");
console.log("\nResposta do exercicio H o tipo de Number ");
console.log("\nnovela brasileira:", novela,);
console.log("\nResposta do exercicio I o tipo de Number ");
console.log("\npotencia nominal de uma lampada", potencia,"W");
console.log("\nResposta do exercicio J o tipo de Number ");
console.log("\npotencia real de uma lampada", potencia,"v")
console.log("\nResposta do exercicio K o tipo de Number ");




/*2. Tipos de dados – Escolha o melhor tipo de dados para cada uma das situações
abaixo e forneça um exemplo de um valor típico que seria mantido pela variável
e explique por que você escolheu o tipo escolhido.
a. o número de irmãos que você tem
b. seu conceito nesta aula
c. a quantidade de minutos de um ano
d. a idade de uma pessoa
e. a média da idade dos estudantes dessa classe
f. a população da terra
g. a temperatura média de ontem
h. o nome de uma novela brasileira
i. a potência nominal de uma lâmpada
j. a potência real de uma lâmpada, aferida pelo Inmetro
k. a população de um município
l. o peso de uma pessoa
m. a velocidade do vento na região de uma determinada usina eólica
n. a altura de uma pessoa em metros
o. a altura de uma pessoa em centímetros
p. a cotação do dólar em reais
q. pontuação de um time em um jogo de basquete
r. o preço de uma TV
s. o salário de um ministro de Estado
t. o nome de um presidente da velha república
u. o número de pernas de um animal
v. o preço de um automóvel
*/