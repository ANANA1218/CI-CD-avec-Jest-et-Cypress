const express = require('express');

const app = express();

app.get('/', (req, res) => {

  res.send('Bienvenue sur le serveur Express !');
});

const PORT = process.env.PORT || 3000;

module.exports = app;

app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});
