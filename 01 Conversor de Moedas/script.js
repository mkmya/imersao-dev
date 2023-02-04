function converter(){
    var valor = document.getElementById('valorEntrada').value
    var cotacao 
    var resultado = document.getElementById('resultado')
    resultado.innerHTML = ''
    var moedaInicial = document.getElementById('moedaInicial').value
    var moedaFinal = document.getElementById('moedaConvertida').value

    if(moedaFinal == 'real'){
        cotacao =  5.15
        var simbolo = 'R$' 
    }else if(moedaFinal == 'dólar'){
        cotacao = 0.19
        var simbolo = 'U$'
    }

    if(moedaInicial == moedaFinal){
        resultado.innerHTML = '[ERRO] Não é possível fazer a conversão entre moedas do mesmo tipo.'
    }else{
        var valorConvertido = (valor * cotacao).toFixed(2)
        resultado.innerHTML += `Converter ${valor} de ${moedaInicial} para ${moedaFinal}:`
        resultado.innerHTML += `<h1>${simbolo} ${valorConvertido}</h1>`
    }
}








