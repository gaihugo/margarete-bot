// Importação de bibliotecas
const Discord = require("discord.js");

// Importações de Minhas definições
const { tapaIMG, errIMG } = require("../scripts/js/radoms"); // Imagem aleatoria do erro e do tapa
const { avatarM, color, thum } = require("../scripts/js/env"); // Padrões graficos da margarete

// Função
const execute = async (client, message, args, author, avatar) => {
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  // Citou um usuario para ser tapeado
  if (!user) {
    // Não => Mensagem de erro no chat
    
    // Parametros
    const msg = `acaba de dar um tapão em ${author},você precisa de ajuda digita ?help`;

    // Embed de erro do tapa
    const errs = new Discord.MessageEmbed() 
      .setColor(color)
      .setTitle("Um Puta Erro!!!")
      .setAuthor("Margarete", avatarM)
      .setDescription("Margarete " + msg)
      .setThumbnail(thum)
      .setTimestamp()
      .setImage(errIMG())
      .setFooter("Margarete a injustiçada do Discord", avatarM);

    // Envio
    message.channel.send(errs);
    message.channel.send("Que " + msg, { tts: true });
    message.channel.send("Que você é uma chata,insuportável!", { tts: true });
  } else {
    // Sim => Mensagem de tapa

    // Parametros
    const msg = `${author} acaba de dar um tapão em ${user.username}`;

    // Embed
    const embedTapa = new Discord.MessageEmbed()
      .setColor("#E35C40")
      .setTitle("Um Puta Tapão!!!")
      .setAuthor(author, avatar)
      .setDescription(msg)
      .setTimestamp()
      .setImage(tapaIMG())
      .setFooter("Margarete a bota do Discord", avatarM);
    
    // Envio
    message.channel.send(embedTapa);
    message.channel.send(msg, { tts: true });
    message.channel.send("Tô passada chocada Creusa! :scream:", { tts: true });
  }
};

// Exportação
module.exports = {
  name: "tapa",
  execute
}