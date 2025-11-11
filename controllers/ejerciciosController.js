const infoEjercicios = require('../src/ejercicios');

exports.readEjercicios = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(infoEjercicios));
};