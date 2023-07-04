require('dotenv').config();

const ApikeyVagalume = process.env.API_KEY_VAGALUME;

async function trechoMusica(artista, musica) {
    //fazendo requisição a Api do Vagalumes
    const responstaApiVagalumes = await fetch(`https://api.vagalume.com.br/search.php?apikey=${ApikeyVagalume}&art=${artista}&mus=${musica}&extra=relart`);
    const data = await responstaApiVagalumes.json();
    const LetraMusica = data.mus[0].text;

    if (!data.mus || data.mus.length === 0) {
        return { message: 'Música não encontrada' };
    }

    // selecionando o primeiro paragrafo do trecho
    const paragrafos = LetraMusica.split('\n\n');

    // pegando o segundo paragrafo, costuma ter mais conteudo
    const primeiroParagrafo = paragrafos[1];

    // trecho tratado
    const trechoMusica = primeiroParagrafo;

    return trechoMusica;
}

exports.trechoMusica = trechoMusica;
