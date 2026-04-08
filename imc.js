// Calculador de IMC

let nome = "BELAamozaum" ;
let peso = 55; 
let altura = 1.70;

//Função que calcula e retorna o IMC
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura)
};

let resultado = calcularIMC(peso, altura)
console.log(`IMC de ${nome}: ${resultado}`);