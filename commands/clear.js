const Discord = require("discord.js");
const { errMessage } = require("../scripts/js/env");

module.exports.run = async (client, message, args) => {
  const somenthing = args.join(" ");
  if (somenthing) {
    message.channel.send(errMessage, { tts: true });
  } else {
    const fetched = await message.channel.messages.fetch({ limit: 100 });
    message.channel.bulkDelete(fetched, { filterOld: false });
    message.channel.bulkDelete(fetched, { filterOld: true });
    message.channel.send("Tudo limpo, já escondi o corpo");
  }
};
