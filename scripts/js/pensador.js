const pensador = require("pensador-api");
const { randomElement } = require("./radomActivity");

const getPhrase = async function (author) {
  var array = await pensador({ term: author, max: 100 });
  var frases = array.phrases;
  var frase = randomElement(frases);
  return frase;
};

module.exports = getPhrase;
