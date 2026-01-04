const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para JSON
app.use(express.json());

// Rota teste
app.get('/', (req, res) => {
  res.send('Backend TechFocus funcionando!');
});

// Conectar com MongoDB (opcional por enquanto)
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB conectado!'))
//   .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
