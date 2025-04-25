let res = document.querySelector('section#result')
let computador = 0
let jogador = 0

function sortear() {
    let min = 2 
    let max = 200
    let dif = max - min
    let aleatorio = Math.random()
    computador = min + Math.trunc(dif * aleatorio)
}

function jogar() {
    jogador = Number(window.prompt('Qual é o seu palpite?'))
    if (jogador < computador) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MAIOR</strong>!</p>`
    } else if (jogador > computador) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MENOR</strong>!</p>`
    } else if (jogador == computador) {
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${computador}! Que tal a gente envolver dinheiro, vc terá 10 opurtunidades para acertar um número de 1 á 20, porém não poderá ocorre 7 "MAIOR"</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }
}