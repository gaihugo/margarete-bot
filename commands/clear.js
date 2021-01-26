const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const fetched = await message.channel.messages.fetch({ limit: 100 });
  message.channel.bulkDelete(fetched, { filterOld: false });
  message.channel.bulkDelete(fetched, { filterOld: true });
  message.channel.send("Tudo limpo, já escondi o corpo");
};
