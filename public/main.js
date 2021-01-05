const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");

client.on("ready", () => {
  console.log(`Logado com o bot ${client.user.tag}`);
});

client.on("message", (message) => {
  if (message.author == client.user) {
    return;
  } else {
    if (message.content == "ola") {
      message.reply("ola");
    }
    console.log(`${message.author.username}: ${message.content}`);
  }
});

client.login(config.token);
