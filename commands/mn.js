const Discord = require("discord.js");
const dicio = require("../scripts/js/api/dicio");
const { errIMG } = require("../scripts/js/radoms");
const { avatarM, color, thum } = require("../scripts/js/env");


module.exports.run = async (client, message, args, author) => {
  const wrd = args.join(" ");

  if (!wrd) {
    const errs = new Discord.MessageEmbed()
      .setColor(color)
      .setTitle("A palavra é Inês istente!!!")
      .setAuthor("Margarete", avatarM)
      .setDescription(`**${author},você precisa de ajuda digita ?help**`)
      .setImage(errIMG())
      .setThumbnail(thum)
      .setTimestamp()
      .setFooter("Margarete a empregada do Discord", avatarM);

    message.channel.send(errs);
    message.channel.send(
      `Digitar uma palavra é dificil né ${author}.Porra é cada coisa que parece ser piada!`,
      { tts: true }
    );
  } else {
    const dc = await dicio(wrd);
    const wo = dc.title
    const mn = dc.mean
    const asw = dc.asw
    const ne = dc.ne
    const nea = dc.near

    if (asw == undefined & ne == undefined){
      const embed = new Discord.MessageEmbed()
          .setColor("#6F69F4")
          .setTitle(`Significado de ${wo}`)
          .setURL("https://dicionario-aberto.net/")
          .setAuthor("Margarete", avatarM)
          .setDescription(`"${mn}" **Dicionário Aberto**`)
          .setTimestamp()
          .setThumbnail(thum)
          .setFooter("Margarete a Biblotecária do Discord", avatarM);
    
        message.channel.send(embed);
        message.channel.send(`Porra bixo não saber o que é ${wo} é foda!`, {
          tts: true,
        });
    }

    if (asw == true & ne == undefined){
      message.channel.send(`A palavra ${wrd} não consta no meu sistema`, {
        tts: true,
      })
    }

    if (ne == true & asw == undefined){
      message.channel.send(`Não achei a palavra requisitada,mas no meu sistema tenho algumas parecidas: ${nea}`, {
        tts: true,
      })
    }
  }
};
