const Discord = require("discord.js");
const { errMessage } = require("../config.json");

module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(" ");
  if (!sayMessage) {
    message.channel.send(errMessage, { tts: true });
  } else {
    message.delete().catch((O_o) => {});
    message.channel.send(sayMessage);
  }
};
