const express = require('express');
const app = express();
const port = 5001;

// Definindo a rota para o caminho raiz
app.get('/', (req, res) => {
  res.send('Página inicial BJJ');
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
