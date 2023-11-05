const express = require('express')
const server = express();
const racas = require('./src/data/racas.json');
const gato = require('./src/data/gato.json')
const https = require('https');
https.get('https://dog.ceo/api/breeds/image/random',(resp) => {
    let dados = '';
    // Um bloco de dados foi recebido.
    resp.on('data', (chunk) => { dados += chunk; });
    // Toda a resposta foi recebida. Exibir o resultado.
    resp.on('end', () => {
    console.log(dados);
    });
    }).on("error", (err) => {
    console.log("Error: " + err.message);
    });

server.get('/cachorro', (req,res) =>{
    return res.json({racas})
});

server.get('/gato', (req,res) =>{
    return res.json({gato})
});

server.get('/', (req,res) =>{
    return res.json({messagem: 'API de gatos e Cachorros, use /cachorro ou /gato para acessa-las'})
})

server.listen(3000, () => {
 console.log('Servidor está funcionando na porta 3000...')
});