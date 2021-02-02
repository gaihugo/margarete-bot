const Discord = require("discord.js");
const { anmlIMG, errIMG } = require("../scripts/js/radoms");
const { avatarM, color } = require("../config.json");

module.exports.run = async (client, message, args, author, avatar) => {
  const somenthing = args.join(" ");
  if (somenthing) {
    const msg = `animal é você ${author}!!!,você precisa de ajuda digita ?help`;
    const errs = new Discord.MessageEmbed()
      .setColor(color)
      .setTitle("Olha o animal!!!")
      .setAuthor("Margarete", avatarM)
      .setDescription("O " + msg)
      .setImage(avatar)
      .setThumbnail(errIMG)
      .setTimestamp()
      .setFooter("Margarete a injustiçada do Discord", avatarM);
    message.channel.send(errs);
    message.channel.send("Que o " + msg, { tts: true });
    message.channel.send("Que você é um cachorrinho filha da puta!", {
      tts: true,
    });
  } else {
    const msg = `Aqui está a foto de um belíssimo animal!`;
    const embedTapa = new Discord.MessageEmbed()
      .setColor("#EDDD53")
      .setTitle("Belíssimo Animal")
      .setAuthor("Margarete", avatarM)
      .setDescription(msg)
      .setImage(anmlIMG)
      .setTimestamp()
      .setFooter("Margarete a bota do Discord", avatarM);
    message.channel.send(embedTapa);
    message.channel.send(msg, { tts: true });
    message.channel.send(
      "Aqui tem um com nome biba,biba pingo,pingo? que palhaçada é essa?",
      { tts: true }
    );
  }
};
