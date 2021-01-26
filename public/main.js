const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");
const prefix = config.prefix;
const randomActivity = require("../scripts/radomActivity");

client.on("ready", () => {
  randomActivity(client);
  console.log(`Logado com o bot ${client.user.tag}`);
});

client.on("message", async (message) => {
  if (!message.content.startsWith(prefix)) return;
  if (message.author == client.user) return;
  if (
    message.content.startsWith(`<@!${client.user.id}`) ||
    message.content.startsWith(`<@${client.user.id}`)
  )
    return;
  let args = message.content.split(" ").slice(1);
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  try {
    let commandFile = require(`../commands/${command}.js`);
    delete require.cache[require.resolve(`../commands/${command}.js`)];
    return commandFile.run(client, message, args);
  } catch (err) {
    console.error("Erro" + err);
  }
});

client.login(config.token);
