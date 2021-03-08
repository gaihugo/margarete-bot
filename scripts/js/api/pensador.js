// Importação de biblioteca
const pensador = require("pensador-api");

// Importação de js
const { randomElement } = require("../radomActivity");

// Função
const getPhrase = async function (author) {
  var array = await pensador({ term: author, max: 100 }); // Retorna um array com alguns elementos
  var frases = array.phrases; // Pega as frases do array
  var frase = randomElement(frases); // Sortea uma frase do autor
  return frase;
};

// Exportação
module.exports = getPhrase;
