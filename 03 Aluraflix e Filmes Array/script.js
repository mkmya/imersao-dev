var listaFilmes = ["https://jpimg.com.br/uploads/2017/04/4022344771-katniss-em-novo-poster.jpg", "https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png", "https://upload.wikimedia.org/wikipedia/pt/c/c0/ForrestGumpPoster.jpg", "https://hubpop.com.br/wp-content/uploads/2021/10/panico-5-scream-690x1024.jpg", "https://br.web.img3.acsta.net/medias/nmedia/18/90/90/21/20119166.jpg", "https://cinegarimpo.com.br/wp/content/uploads/2016/10/homolog.cinegarimpo_mary-e-max.jpg"]
var nomeFilmes = ["Jogos Vorazes", "Interestelar", "Forrest Gump", "Pânico", "O Guia do Mochileiro das Galáxias", "Mary e Max"]

document.write('<div class="container-filmes">')
for (i in listaFilmes) {
    if(listaFilmes[i].endsWith('jpg') || listaFilmes[i].endsWith('jpeg') || listaFilmes[i].endsWith('png')){
        document.write('<div class="filme">')
        document.write(`<img src=${listaFilmes[i]}>`)
        document.write(`<p>${nomeFilmes[i]}</p>`)
        document.write('</div>')
    }else{
    alert('[ERRO] Não foi possível carregar a imagem. Insira um arquivo JPG, JPEG ou PNG.')
    }
}
document.write('</div>')
