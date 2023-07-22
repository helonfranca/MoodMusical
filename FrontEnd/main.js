const button = document.getElementById('enviar');
const trecho = document.getElementById('trecho');
const sentimento = document.getElementById('sentimento');

const artista = document.getElementById('artista');
const musica = document.getElementById('musica');



button.addEventListener('click', function(e) {
    console.log(artista.value);
    let searchartista = artista.value.replace(/ /g,"%20");
    let searchmusica = musica.value.replace(/ /g,"%20");

    const url = `http://localhost:3000/buscarSentimento?artista=${searchartista}&musica=${searchmusica}`


    fetch(url).then(res => res.json()
        .then(dados => {
            trecho.value = dados.trecho;
            sentimento.value = dados.sentimento;
            console.log(trecho.value);
            console.log(sentimento.value);
        }));
});
/*
musica.addEventListener("blur",(e)=> {
    console.log(musica.value);
    let searchartista = artista.value.replace(" ","%20");
    let searchmusica = musica.value.replace(" ","%20");

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`http://localhost:3000/buscarSentimento?artista=${searchartista}&musica=${searchmusica}`).
    then(data => data.json()).then(sentimento => console.log(sentimento))
        .then()
})*/