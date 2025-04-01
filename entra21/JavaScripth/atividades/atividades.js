
function terreno() {
    let largura = prompt("Qual a largura do terreno?");
    let comprimento = prompt("Qual o comprimento do terreno?");

    let dimensao = largura * comprimento

    alert("O tamanho do terreno é: " + dimensao, " m²");
}


function cavalos() {
    let cavalos = prompt("Quantos cavalos tem no estábulo?");
    let ferraduras = cavalos * 4;

    alert("Ira ser necessário comprar " + ferraduras, " ferraduras")
}

function padaria() {
    let pao = prompt("Quantos pães foram vendidos?")
    let broa = prompt("Quantas broas foram vendidos?")

    let qtdpao = pao * 0.12
    let qtdbroa = broa * 1.5
    let total = qtdpao + qtdbroa
    let poupanca = total * 0.10
    let dinheiro = total - poupanca

    alert("O dinheiro que vai para a poupança é: " + poupanca + "reais. E o lucro é de " + dinheiro + "reais.")

}


function calcularidade() {
    let nome = prompt("Qual o seu nome?")
    let idade = prompt("Qual a sua idade?")

let dias = idade * 365

alert(nome+" você tem " +dias+ " dias de vida.")

}

function gasolina() {

let gasolina = prompt("Quanto que ta o litro de gasolina")
let dinheiro = prompt("Quantos reais de gasolina você quer colocar?")

let total = dinheiro / gasolina

alert("Você conseguiu colocar "+total+" litros de gasolina.")

}

function restaurante() {
    let prato = prompt("Qunato pesa o seu prato?")

let refeicao = prato * 12

alert("Você deve pagar " +refeicao+ " reais.")

}

function calcuardias() {
    let dia = prompt("Informe um dia")
    let mes = prompt("Informe um mês")

let caldia = 30 - dia
let calmes = mes * 30 - caldia

alert("Se passaram " +calmes+" dias.")


}


function notas() {
    let nota1 = prompt("Informe sua nota 1")
    let nota2 = prompt("Informe sua nota 2")
    let nota3 = prompt("Informe sua nota 3")

    let peso1 = nota1 * 0.1
    let peso2 = nota2 * 0.2
    let peso3 = nota3 * 0.3

    let total = (peso1 + peso2 + peso3) /3
    alert("A sua média ponderada é "+total)
}













