const Discord = require("discord.js");
const phrase = require("../scripts/js/pensador");
const { errIMG } = require("../scripts/js/radoms");
const { avatarM, color, thum } = require("../scripts/js/env");

module.exports.run = async (client, message, args, author) => {
  const auth = args.join(" ");

  if (!auth) {
    const errs = new Discord.MessageEmbed()
      .setColor(color)
      .setTitle("Uma livrada na cara!!!")
      .setAuthor("Margarete", avatarM)
      .setDescription(`**${author},você precisa de ajuda digita ?help**`)
      .setImage(errIMG)
      .setThumbnail(thum)
      .setTimestamp()
      .setFooter("Margarete a empregada do Discord", avatarM);

    message.channel.send(errs);
    message.channel.send(
      `${author}, não aguento mais você errando vou te dar uma livrada na cara!`,
      { tts: true }
    );
  } else {
    message.channel.send(
      "Esse comando é um pouco lento.Pedimos que espere e se não gostou foda-se!",
      { tts: true }
    );

    const text = await phrase(auth);
    const ph = text.text;
    const atr = text.author;
    const embed = new Discord.MessageEmbed()
      .setColor("#f7e1eb")
      .setTitle(`Uma Frase de ${atr}`)
      .setURL("https://www.pensador.com/")
      .setAuthor("Margarete", avatarM)
      .setDescription(`"${ph}" **Pensador**`)
      .setTimestamp()
      .setThumbnail("https://i.ytimg.com/vi/mtyD-HmKIEo/maxresdefault.jpg")
      .setFooter("Margarete a Biblotecária do Discord", avatarM);

    message.channel.send(embed);
    message.channel.send("tric,tric,tric, Comi o cú de quem tá lendo!", {
      tts: true,
    });
  }
};
