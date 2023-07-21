require('dotenv').config();

const ApikeyChatgpt = process.env.API_KEY_CHATGPT;

async function processaSentimento(trechoMusica) {
    // API do ChatGPT
    const respostaChatGPT = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${ApikeyChatgpt}`,
            'Content-Type': 'application/json'
        },
        //fornecidos pela Api a forma de Envio
        body: JSON.stringify({
            model: 'text-davinci-003',
            prompt: `${trechoMusica}\nQ: Qual o sentimento que esse trecho de música transmite?\nA:`,
            max_tokens: 2048,
            temperature: 0.8,
            n: 1,
            stop: '\n'
        })
    });

    const respostaChatGPTJSON = await respostaChatGPT.json();
    const sentimento = respostaChatGPTJSON.choices[0].text.trim();

    const respostaJSON = {
        'trecho': trechoMusica,
        'sentimento': sentimento
    };

    return respostaJSON;
}

exports.processaSentimento = processaSentimento;
