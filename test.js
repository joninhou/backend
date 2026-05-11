//1. Declare 5 variáveis para representar uma viagem
//2. Organizar uma forma de imprimir esses valores

const destinoDaViagem = "Espanha";
const nomeDoViajante = "Junior";
const cidadeDeOrigem = "Curitiba";
let duracaoDoVooEmDias = 1;
const meioDeTransporte = "Avião";

console.log(`O viajante ${nomeDoViajante}, irá viajar de ${cidadeDeOrigem} até a ${destinoDaViagem} de ${meioDeTransporte}, em um percurso de ${duracaoDoVooEmDias} dia de viagem.`)

//3. Crie duas variáveis numéricas com o custo de passagem, hospedagem e alimentação
//4. Imprimir uma soma dos valores

let custoPassagem = 1800.00;
let hospedagem = 1200.00;
let alimentacao = 350.00;

soma = alimentacao + hospedagem + custoPassagem;
const total = soma;

console.log(`O custo total somando custo da pasagem, hospedagem e alimentação será de R$ ${soma}.00 reais`)