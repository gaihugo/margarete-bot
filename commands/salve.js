const Discord = require("discord.js");
const { salveMsg } = require("../scripts/js/radoms");
const { errMessage } = require("../scripts/js/env");

module.exports.run = async (client, message, args) => {
  const somenthing = args.join(" ");
  if (somenthing) {
    message.channel.send(errMessage, { tts: true });
  } else {
    const svl = "Salve! ";
    message.reply(svl + salveMsg(), { tts: true });
  }
};
