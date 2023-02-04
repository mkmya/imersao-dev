var dadosJogador = []
var elementoTabela = document.getElementById('tabelaJogadores')

function exibirNaTela(){
    elementoTabela.innerHTML = ''
    for(i in dadosJogador){
        elementoTabela.innerHTML += `
        <tr>
            <td>${dadosJogador[i].nome}</td>
            <td>${dadosJogador[i].vitoria}</td>
            <td>${dadosJogador[i].empate}</td>
            <td>${dadosJogador[i].derrota}</td>
            <td>${dadosJogador[i].pontos}</td>
            <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
            <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
            <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
            <td><button onClick="remover(${i})">Remover</button></td>
        </tr>`
    }  
}
    
function adicionarVitoria(i){
    dadosJogador[i].vitoria++
    dadosJogador[i].pontos += 3
    exibirNaTela()
}

function adicionarEmpate(i){
    dadosJogador[i].empate++
    dadosJogador[i].pontos++
    exibirNaTela()
}

function adicionarDerrota(i){
    dadosJogador[i].derrota++
    exibirNaTela()
}

function adicionarJogador(){    
    var nomeJogador = document.getElementById('nomeNovoJogador')

    if(nomeJogador.value.length == 0){
        alert('[ERRO] Por favor, insira o nome do jogador para adicionar.')
    }else{
        dadosJogador.push({nome: nomeJogador.value, 
            vitoria: 0,
            empate: 0,
            derrota: 0,
            pontos: 0
        })
    }
    nomeJogador.value = ''
    nomeJogador.focus()
    exibirNaTela()
}


function limparDados(){
    dadosJogador = []
    exibirNaTela()
}

function remover(i){
    dadosJogador.splice(i, 1)
    exibirNaTela()
}