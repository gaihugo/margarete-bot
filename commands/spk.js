const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const spkMessage = args.join(" ");
  if (!spkMessage) {
    message.channel.send(
      "Não cara como você é burro, se precisa de ajuda digita ?help",
      { tts: true }
    );
  } else {
    message.delete().catch((O_o) => {});
    message.channel.send(spkMessage, { tts: true });
  }
};
