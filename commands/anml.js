// Importação de bibliotecas
const Discord = require("discord.js");

// Importações de Minhas definições
const { anmlIMG, errIMG } = require("../scripts/js/radoms"); // Imagem aleatoria do erro e do animal
const { avatarM, color } = require("../scripts/js/config"); // Padrões graficos da margarete

// Função
const execute = async (client, message, args, author, avatar) => {
  const somenthing = args.join(" ");
  // Citou algo depois do comando
  if (somenthing) {
    // Sim => Mensagem de erro

    // Parametro
    const msg = `animal é você ${author}!!!,você precisa de ajuda digita ?help`;

    // Embed
    const errs = new Discord.MessageEmbed()
      .setColor(color)
      .setTitle("Olha o animal!!!")
      .setAuthor("Margarete", avatarM)
      .setDescription("O " + msg)
      .setImage(avatar)
      .setThumbnail(errIMG())
      .setTimestamp()
      .setFooter("Margarete a injustiçada do Discord", avatarM);

    // Envio
    message.channel.send(errs);
    message.channel.send("Que o " + msg, { tts: true });
    message.channel.send("Que você é um cachorrinho filha da puta!", {
      tts: true,
    });
  } else {
    // Não => Mensagem do animal

    // Parametros
    const msg = `Aqui está a foto de um belíssimo animal!`;

    // Embed
    const embedTapa = new Discord.MessageEmbed()
      .setColor("#EDDD53")
      .setTitle("Belíssimo Animal")
      .setAuthor("Margarete", avatarM)
      .setDescription(msg)
      .setImage(anmlIMG())
      .setTimestamp()
      .setFooter("Margarete a bota do Discord", avatarM);

    // Envio
    message.channel.send(embedTapa);
    message.channel.send(msg, { tts: true });
    message.channel.send(
      "Aqui tem um com nome biba,biba pingo,pingo? que palhaçada é essa?",
      { tts: true }
    );
  }
};

// Exportação
module.exports = {
  name: "anml",
  execute
}