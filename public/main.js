const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");
const prefix = config.prefix;
// const store = require("../scripts/store.js");
// const commands = store(prefix);

client.on("ready", () => {
  console.log(`Logado com o bot ${client.user.tag}`);
});

client.on("message", async (message) => {
  if (message.author != client.user) {
    if (message.content == "oi") {
      message.channel.send("Rola", { tts: true });
    }
  }
});

client.login(config.token);
