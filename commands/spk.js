const Discord = require("discord.js");
const { errMessage } = require("../scripts/js/env");

module.exports.run = async (client, message, args) => {
  const spkMessage = args.join(" ");
  if (!spkMessage) {
    message.channel.send(errMessage, { tts: true });
  } else {
    message.delete().catch((O_o) => {});
    message.channel.send(spkMessage, { tts: true });
  }
};
