# MoodMusical: Projeto de Análise de Sentimento em Letras de Música

Este é um projeto de um aplicativo Node.js que utiliza a API do Vagalume e a API do ChatGPT para analisar e determinar o sentimento de trechos de letras de música. O objetivo é fornecer uma ferramenta que possa auxiliar na compreensão emocional de músicas, permitindo que os usuários tenham insights sobre o sentimento transmitido pelos trechos selecionados.

## Funcionalidades

- Integração com a API do Vagalume para obter as letras das músicas.
- Integração com a API do ChatGPT para analisar os trechos das letras e determinar o sentimento.
- Processamento de trechos de letras de músicas para identificar emoções, como alegria, tristeza, raiva, entre outras.

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter os seguintes requisitos instalados em seu ambiente:

- Node.js (versão 18 ou superior)
- NPM (gerenciador de pacotes do Node.js)

## Configuração

Siga as etapas abaixo para configurar e executar o projeto em seu ambiente local:

1. Clone este repositório em sua máquina:

```
git clone https://github.com/helonfranca/MoodMusical.git
```

2. Navegue até o diretório do projeto (ou vá na pasta "Back-End" caso não funcione):

```
cd MoodMusical/Back-End

ou

cd MoodMusical-main/Back-End
```

3. Instale as dependências do projeto:

```
npm install
```

4. Crie um arquivo `.env` na raiz do projeto (ou na pasta "Back-End" caso não funcione. E de 'npm install' mais uma vez) e defina as variáveis de ambiente necessárias. Por exemplo:

```
VAGALUME_API_KEY=SuaChaveDaAPIVagalume
CHATGPT_API_KEY=SuaChaveDaAPIChatGPT
```

5. Execute o projeto:

```
npm start
```

6. Acesse o serviço na rota `http://localhost:3000/buscarSentimento`




