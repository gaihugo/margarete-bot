// Importação de Bibliotecas
const Discord = require("discord.js");
const fs = require("fs")
const path = require("path")

// Minhas definições
const abrv = require("../scripts/js/abrv")
const { randomActivity } = require("../scripts/js/radomActivity");
const ignore = require("../scripts/jsons/ignore.json")
// ENV
const { prefix, token, mssg, word, word2, barraI, errMessage } = require("../scripts/js/env");

// Classes
const client = new Discord.Client();
client.queues =  new Map()
client.commands = new Discord.Collection();

// Importação dos Comandos 
const commandFiles = fs.readdirSync(path.join(__dirname,"../commands")).filter((fileName) => {
  return fileName.endsWith(".js")
})
for (var fileName of commandFiles) {
  const command = require(`../commands/${fileName}`)
  client.commands.set(command.name,command)
}

// Ao iniciar 
client.on("ready", () => {
  randomActivity(client);
  console.log(`Logado com o bot ${client.user.tag}`);
});

// Ao receber uma mensagem
client.on("message", async (message) => {
  // Parametros
  const msg = message.content.toLowerCase();
  const authr = message.author.username;
  const avatar = message.author.displayAvatarURL({ format: "png" });
  let args = msg.split(" ").slice(1);
  let command = msg.split(" ")[0];
  command = command.slice(prefix.length);
  let cmmd = abrv(command)

  // Verificação "Filtro"
  if (message.author == client.user) return;
  if (msg == word || msg == word2) {
    message.channel.send(mssg);
  }
  if (!msg.startsWith(prefix)) return;
  const letter = msg.slice(1, 2)
  if (msg == prefix || letter == prefix || letter == barraI  ||  letter == `"` ||  ignore.find((e) => { return e == letter })) return;
  if (
    msg.startsWith(`<@!${client.user.id}`) ||
    msg.startsWith(`<@${client.user.id}`)
  )
    return;
  
  // Executar Comandos
  try{
    client.commands.get(cmmd).execute(client, message, args, authr, avatar)
  } catch(e){
    message.channel.send(errMessage, {tts: true})
  }
});

client.login(token);
