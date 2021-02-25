const Discord = require("discord.js");
const embed = require("./embeds/help_embed")

module.exports.run = async (client, message, args) => {
  const somenthing = args.join(" ");
  if (somenthing) {
    message.channel.send(
      "Não cara como você é burro, se precisa de ajuda digita somente ?help",
      { tts: true }
    );
  } else {
    message.channel.send(embed);
  }
};
