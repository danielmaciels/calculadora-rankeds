// desafio calculador de partidas rankeadas

let resultado = calculadorDePartidas(122, 36)
let textoResultado = "O Herói tem de saldo " + resultado + " e está no nível "

if (resultado <=10){
    console.log(textoResultado + "Ferro.")
}

if (resultado >=11 && resultado <=20){
    console.log(textoResultado + "Bronze.")
}

if (resultado >=21 && resultado <=50){
    console.log(textoResultado + "Prata.")
}

if (resultado >=51 && resultado <=80){
    console.log(textoResultado + "Ouro.")
}

if (resultado >=81 && resultado <=90){
    console.log(textoResultado + "Diamante.")
}

if (resultado >=91 && resultado <=100){
    console.log(textoResultado + "Lendário.")
}

if (resultado >= 101){
    console.log(textoResultado + "Imortal.")
}

function calculadorDePartidas(saldoVitorias, saldoDerrotas){
    let calculadorDePartidas = saldoVitorias - saldoDerrotas
    return calculadorDePartidas

}