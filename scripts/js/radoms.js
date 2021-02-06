const { randomElement } = require("./radomActivity");
const errIMGS = require("../jsons/errs.json");
const tapaIMGS = require("../jsons/tapa.json");
const anmlIMGS = require("../jsons/animals.json");
const salveMsgs = require("../jsons/salve.json");

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

module.exports = {
  tapaIMG,
  errIMG,
  anmlIMG,
  salveMsg,
};
