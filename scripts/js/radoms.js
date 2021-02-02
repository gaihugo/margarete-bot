const { randomElement } = require("./radomActivity");
const errIMGS = require("../jsons/errs.json");
const tapaIMGS = require("../jsons/tapa.json");
const anmlIMGS = require("../jsons/animals.json");
const salveMsgs = require("../jsons/salve.json");

const tapaIMG = randomElement(tapaIMGS);
const errIMG = randomElement(errIMGS);
const anmlIMG = randomElement(anmlIMGS);
const salveMsg = randomElement(salveMsgs);

module.exports = {
  tapaIMG,
  errIMG,
  anmlIMG,
  salveMsg,
};
