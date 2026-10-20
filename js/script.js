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
