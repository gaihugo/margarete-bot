const Discord = require("discord.js");
const { tapaIMG, errIMG } = require("../scripts/js/radoms");
const { avatarM, color, thum } = require("../scripts/js/env");

module.exports.run = async (client, message, args, author, avatar) => {
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!user) {
    const msg = `acaba de dar um tapão em ${author},você precisa de ajuda digita ?help`;
    const errs = new Discord.MessageEmbed()
      .setColor(color)
      .setTitle("Um Puta Erro!!!")
      .setAuthor("Margarete", avatarM)
      .setDescription("Margarete " + msg)
      .setThumbnail(thum)
      .setTimestamp()
      .setImage(errIMG())
      .setFooter("Margarete a injustiçada do Discord", avatarM);
    message.channel.send(errs);
    message.channel.send("Que " + msg, { tts: true });
    message.channel.send("Que você é uma chata,insuportável!", { tts: true });
  } else {
    const msg = `${author} acaba de dar um tapão em ${user.username}`;
    const embedTapa = new Discord.MessageEmbed()
      .setColor("#E35C40")
      .setTitle("Um Puta Tapão!!!")
      .setAuthor(author, avatar)
      .setDescription(msg)
      .setTimestamp()
      .setImage(tapaIMG())
      .setFooter("Margarete a bota do Discord", avatarM);
    message.channel.send(embedTapa);
    message.channel.send(msg, { tts: true });
    message.channel.send("Tô passada chocada Creusa! :scream:", { tts: true });
  }
};
