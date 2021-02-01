const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");
const prefix = config.prefix;
const { randomActivity } = require("../scripts/radomActivity");

client.on("ready", () => {
  randomActivity(client);
  console.log(`Logado com o bot ${client.user.tag}`);
});

client.on("message", async (message) => {
  const msg = message.content;
  const authr = message.author.username;
  const avatar = message.author.displayAvatarURL({ format: "png" });
  if (!msg.startsWith(prefix)) return;
  if (msg == prefix || msg == "??" || msg == "?!") return;
  //TODO IGNORAR PREFIX + SIMBOLO
  if (message.author == client.user) return;
  if (
    msg.startsWith(`<@!${client.user.id}`) ||
    msg.startsWith(`<@${client.user.id}`)
  )
    return;
  let args = msg.split(" ").slice(1);
  let command = msg.split(" ")[0];
  command = command.slice(prefix.length);
  try {
    let commandFile = require(`../commands/${command}.js`);
    delete require.cache[require.resolve(`../commands/${command}.js`)];
    return commandFile.run(client, message, args, authr, avatar);
  } catch (err) {
    message.channel.send(
      "Isto non ecsiste!, se precisa de ajuda digita ?help",
      {
        tts: true,
      }
    );
    console.error("Erro" + err);
  }
});

client.login(config.token);
