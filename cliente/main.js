const artista = document.querySelector("#artista");
const musica = document.querySelector("#musica");



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
})