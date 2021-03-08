// Importação 

// js
const { randomElement } = require("./radomActivity");

// JSONS
const errIMGS = require("../jsons/errs.json");
const tapaIMGS = require("../jsons/tapa.json");
const anmlIMGS = require("../jsons/animals.json");
const salveMsgs = require("../jsons/salve.json");

// Funções
const tapaIMG = function () {
  return randomElement(tapaIMGS);
};
const errIMG = function () {
  return randomElement(errIMGS);
};
const anmlIMG = function () {
  return randomElement(anmlIMGS);
};
const salveMsg = function () {
  return randomElement(salveMsgs);
};

// Exportações
module.exports = {
  tapaIMG,
  errIMG,
  anmlIMG,
  salveMsg,
};