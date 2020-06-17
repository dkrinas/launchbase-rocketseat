// Calculo de IMC
// EX1 Desafio 1

const nome = "Daniel"
const peso = 91
const altura = 1.73
const sexo = "M"

const imc = peso / (altura^2)

if (imc >= 30) {
    console.log (`${nome} você está acima do peso`)
} else {
    console.log (`${nome} você não está acima do peso`)
}


