const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");

client.on("ready", () => {
  console.log(`Logado com o bot ${client.user.tag}`);
});

client.login(config.token);
