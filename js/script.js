console.log("***************************************************");
console.log("Exercício 1");
console.log("***************************************************");

// Vamos apenas testar direto os operadores na consola
console.log(10 != 5);   // Mostra true porque 10 é diferente de 5
console.log(10 === 10); // Mostra true porque são iguais em valor e tipo
console.log(10 >= 20);  // Mostra false porque 10 não é maior ou igual a 20




console.log("***************************************************");
console.log("Exercício 2");
console.log("***************************************************");

let peso = 70;
let altura = 1.75;
let imc = peso / (altura * altura); // Fórmula básica

console.log("IMC:");
console.log(imc);

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc <= 24.9) {
    console.log("Peso ideal");
} else {
    console.log("Acima do peso");
}


console.log("***************************************************");
console.log("Exercício 3");
console.log("***************************************************");

// Loop for simples contando de 1 até 10
for (let i = 1; i <= 10; i++) {
    console.log("o valor da contagem é:", i);
}

console.log("***************************************************");
console.log("Exercício 4");
console.log("***************************************************");

let herois = ["Thor", "Hulk", "Capitão América", "Arqueiro", "Viúva Negra"];

// Acedendo a cada posição da lista manualmente pelo índice
console.log(herois[0]);
console.log(herois[1]);
console.log(herois[2]);
console.log(herois[3]);
console.log(herois[4]);

console.log("***************************************************");
console.log("Exercício 5");
console.log("***************************************************");

let temPermissao = true;

// Estrutura básica da ternária: (condição) ? se_verdadeiro : se_falso
let resultado = temPermissao ? "Tem permissão" : "Não tem permissão";

console.log(resultado);

console.log("***************************************************");
console.log("Exercício 6");
console.log("***************************************************");

let usuarioDigitado = "admin";
let senhaDigitada = "1234";

// Compara se o utilizador e a senha estão corretos ao mesmo tempo
if (usuarioDigitado === "admin" && senhaDigitada === "1234") {
    console.log("Login realizado com sucesso");
} else {
    console.log("Falha de autenticação");
}

console.log("***************************************************");
console.log("Exercício 7");
console.log("***************************************************");

// Criamos 7 variáveis simples para as notas
let n1 = 7;
let n2 = 6;
let n3 = 8;
let n4 = 5;
let n5 = 6;
let n6 = 7;
let n7 = 9;

let media = (n1 + n2 + n3 + n4 + n5 + n6 + n7) / 7;

console.log("Média do aluno:");
console.log(media);

if (media >= 6) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
