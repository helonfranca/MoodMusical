const express = require("express");
const { processaSentimento } = require("./processaSentimento");
const { trechoMusica } = require("./trechoMusica");
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json());

app.get("/buscarSentimento", async (req, res) => {
    try {
        //parametros
        const artista = req.query.artista;
        const musica = req.query.musica;

        const respostaMusica = await trechoMusica(artista, musica);

        const respostaJSON = await processaSentimento(respostaMusica); 

        res.send(respostaJSON);

    } catch (error) {

        res.status(500).json({
            error: "Erro na busca do trecho de música ou processamento do sentimento",
        });
    }
});



app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
