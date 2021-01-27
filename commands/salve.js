const Discord = require("discord.js");
const msg = require("../salve_messages.json");

module.exports.run = async (client, message, args) => {
  const somenthing = args.join(" ");
  if (somenthing) {
    message.channel.send(
      "Não cara como você é burro, se precisa de ajuda digita ?help",
      { tts: true }
    );
  } else {
    function randomElement(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
    const svl = "Salve! ";
    var salveMsg = randomElement(msg);

    message.reply(svl + salveMsg, { tts: true });
  }
};
