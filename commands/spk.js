const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const spkMessage = args.join(" ");
  message.delete().catch((O_o) => {});
  message.channel.send(spkMessage, { tts: true });
};
