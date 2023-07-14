const express = require("express");
const {
	processaSentimento
} = require("./processaSentimento");
const {
	trechoMusica
} = require("./trechoMusica");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.json());

app.get("/buscarSentimento", async (req, res) => {
	try {
		// Parâmetros
	    const artista = req.query.artista;
		const musica = req.query.musica;
		let respostaMusica;
        let respostaJSON;

		respostaMusica = await trechoMusica(artista, musica);
        
        //verificando o retorno da api do vagalumes
        if (respostaMusica.message) {
            const tipoMensagem = respostaMusica.type; // obtém o tipo de mensagem retornado
          
            console.log("Tipo de mensagem: ", tipoMensagem);
          
            return res.status(404).json(respostaMusica);
        }

		try {
			respostaJSON = await processaSentimento(respostaMusica);
		} catch (error) {
			return res.status(500).json({
				error: "Erro no processamento do sentimento",
			});
		}

		res.send(respostaJSON);
	}catch (error) {
		res.status(500).json({
			error: "Erro na busca do trecho de música ou processamento do sentimento",
		});
	}
});

app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`);
});