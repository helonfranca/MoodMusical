require('dotenv').config();

const ApikeyVagalume = process.env.API_KEY_VAGALUME;

async function trechoMusica(artista, musica) {
    //fazendo requisição a Api do Vagalumes
    const responstaApiVagalumes = await fetch(`https://api.vagalume.com.br/search.php?apikey=${ApikeyVagalume}&art=${artista}&mus=${musica}&extra=relart`);
    const data = await responstaApiVagalumes.json();
    
    //tratando caso artista e musica não exista
    if (data.type === "notfound" || data.type === "song_notfound") {
        return {
          message: data.type === "notfound" ? 'Artista não encontrado.' : 'Música não encontrada.'
        };
    }

    const LetraMusica = data.mus[0].text;

    // selecionando o primeiro paragrafo do trecho
    const paragrafos = LetraMusica.split('\n\n');

    // pegando o segundo paragrafo, costuma ter mais conteudo
    const primeiroParagrafo = paragrafos[1];

    // trecho tratado
    const trechoMusica = primeiroParagrafo;

    return trechoMusica;
}

exports.trechoMusica = trechoMusica;
