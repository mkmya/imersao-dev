var secretNumber = parseInt(Math.random() * 1001)
var txtResultado = document.querySelector('span#result')
var txtContainer = document.querySelector('div.game')
var contagem = 0

function adivinhar() {   
    var chute = document.querySelector('input#adivinhe')
    if(chute.value.length == 0){
        txtResultado.innerHTML = '[ERRO] Digite um número entre 0 e 1000 para jogar.'
    }else{
        contagem++
        if(chute.value == secretNumber) {
            txtContainer.innerHTML = `<h1>Parabéns! Você venceu o jogo.</h1><span>O número secreto era ${secretNumber} e você acertou em ${contagem} tentativas.`
        } else if(chute.value > secretNumber) {
            txtResultado.innerHTML = `Você errou... O número secreto é menor que ${chute.value}. Quantidade de chutes: ${contagem}`
        } else if(chute.value < secretNumber) {
            txtResultado.innerHTML = `Você errou... O número secreto é maior que ${chute.value}. Quantidade de chutes: ${contagem}`
        }
    }
    chute.value = ''
    chute.focus()
}

