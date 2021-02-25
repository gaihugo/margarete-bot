const Discord = require("discord.js");
const client = new Discord.Client();
const ignore = require("../scripts/jsons/ignore.json")
const { prefix, token, mssg, word, word2, aspas, barraI } = require("../scripts/js/env");
const { randomActivity } = require("../scripts/js/radomActivity");
const abrv = require("../scripts/js/abrv")

client.on("ready", () => {
  randomActivity(client);
  console.log(`Logado com o bot ${client.user.tag}`);
});

client.on("message", async (message) => {
  const msg = message.content.toLowerCase();
  const authr = message.author.username;
  const avatar = message.author.displayAvatarURL({ format: "png" });
  if (message.author == client.user) return;
  if (msg == word || msg == word2) {
    message.channel.send(mssg);
  }
  if (!msg.startsWith(prefix)) return;
  const letter = msg.slice(1, 2)
  if (msg == prefix || letter == prefix || letter == barraI  ||  letter == aspas ||  ignore.find((e) => { return e == letter })) return;
  if (
    msg.startsWith(`<@!${client.user.id}`) ||
    msg.startsWith(`<@${client.user.id}`)
  )
    return;
  let args = msg.split(" ").slice(1);
  let command = msg.split(" ")[0];
  command = command.slice(prefix.length);
  let cmmd = abrv(command)
  try {
    let commandFile = require(`../commands/${cmmd}.js`);
    delete require.cache[require.resolve(`../commands/${cmmd}.js`)];
    return commandFile.run(client, message, args, authr, avatar);
  } catch (err) {
      console.log("Erro ==> "+ err)
      message.channel.send(
        "Isto non ecsiste!, se precisa de ajuda digita ?help",
        {
          tts: true,
        }
      );
    }
});

client.login(token);
