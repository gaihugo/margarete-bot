const Discord = require("discord.js");
const msg = require("../scripts/salve.json");
const { randomElement } = require("../scripts/radomActivity");

module.exports.run = async (client, message, args) => {
  const somenthing = args.join(" ");
  if (somenthing) {
    message.channel.send(
      "Não cara como você é burro, se precisa de ajuda digita ?help",
      { tts: true }
    );
  } else {
    const svl = "Salve! ";
    var salveMsg = randomElement(msg);

    message.reply(svl + salveMsg, { tts: true });
  }
};
