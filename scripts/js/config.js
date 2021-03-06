// Importação de biblioteca
require("dotenv/config");

// Importação do env
const prefix = process.env.PREFIX;
const token = process.env.TOKEN;
const color = "#9cd485";
const avatarM = process.env.AVATARM;
const thum = process.env.THUM;
const gif = process.env.GIF;
const errMessage = process.env.ERRMESSAGE;
const mssg = process.env.MSSG;
const word = process.env.WORD;
const word2 = process.env.WORD2;
const barraI = process.env.BARRA_INVERTIDA;
const errMa = process.env.ERRAUDIO;

// Exportação
module.exports = {
  prefix,
  token,
  color,
  avatarM,
  thum,
  gif,
  errMessage,
  mssg,
  word,
  word2,
  barraI,
  errMa
};
