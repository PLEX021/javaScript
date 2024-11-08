const readlineSync=require("readline-sync");
const homens = Number(readlineSync.question("\nQuantos homens tem na classe?"));
const  mulheres =  Number(readlineSync.question("\nQuantas mulheres tem na classe?"));


const meninos=homens/100;
const meninas=mulheres/100;


console.log("tem: ",homens,"homens");
console.log("tem:",mulheres,"mulheres");


console.log("O total de homens que tem na classe é: ",meninos,"%");
console.log("O total de mulheres que tem na classe é: ",meninas,"%");












/*14. Porcentagens de homens e mulheres numa sala de aula – Crie um algoritmo
que solicite ao usuário que informe o número de homens e o número de 
mulheres matriculadas numa classe e exiba os percentuais equivalentes a cada 
sexo na tela.
Exemplo: suponha que existam 8 homens e 12 mulheres em uma classe
totalizando, portanto, 20 alunos na turma. A porcentagem de homens pode ser 
calculada como 8/20 = 0,4 ou 40% e a porcentagem de mulheres pode ser 
calculada como 12/20 = 0,6 ou 60%.*/