// Importação de bibliotecas
const Discord = require("discord.js");

// Importações de Minhas definições
const dicio = require("../scripts/js/api/dicio"); // Função que pesquisa o significado de uma palavra
const { errIMG } = require("../scripts/js/radoms"); // Imagem de erro
const { avatarM, color, thum } = require("../scripts/js/env"); // Padrões graficos da margarete


// Função
const execute = async (client, message, args, author) => {
  const wrd = args.join(" ");
  // Citou a palavra a ser pesquisada
  if (!wrd) {
    // Não => Mensagem de erro

    // Embed
    const errs = new Discord.MessageEmbed()
      .setColor(color)
      .setTitle("A palavra é Inês istente!!!")
      .setAuthor("Margarete", avatarM)
      .setDescription(`**${author},você precisa de ajuda digita ?help**`)
      .setImage(errIMG())
      .setThumbnail(thum)
      .setTimestamp()
      .setFooter("Margarete a empregada do Discord", avatarM);

    // Envio
    message.channel.send(errs);
    message.channel.send(
      `Digitar uma palavra é dificil né ${author}.Porra é cada coisa que parece ser piada!`,
      { tts: true }
    );
  } else {
    // Sim => Mensagem de palavra

    // Parametros
    const dc = await dicio(wrd);
    const wo = dc.title
    const mn = dc.mean
    const asw = dc.asw
    const ne = dc.ne
    const nea = dc.near

    // Achei a palavra
    if (asw == undefined & ne == undefined){
      // Sim => Envio de messagem de palavra

      // Embed
      const embed = new Discord.MessageEmbed()
          .setColor("#6F69F4")
          .setTitle(`Significado de ${wo}`)
          .setURL("https://dicionario-aberto.net/")
          .setAuthor("Margarete", avatarM)
          .setDescription(`"${mn}" **Dicionário Aberto**`)
          .setTimestamp()
          .setThumbnail(thum)
          .setFooter("Margarete a Biblotecária do Discord", avatarM);

      // Envio
        message.channel.send(embed);
        message.channel.send(`Porra bixo não saber o que é ${wo} é foda!`, {
          tts: true,
        });
    }

    if (asw == true & ne == undefined){
      // Não e não há palavras proximas => Envio de mensagem de erro

      // Envio
      message.channel.send(`A palavra ${wrd} não consta no meu sistema`, {
        tts: true,
      })
    }

    if (ne == true & asw == undefined){
      // Não e há palavras proximas => Envio de mensagem de palavras proximas

      // Envio
      message.channel.send(`Não achei a palavra requisitada,mas no meu sistema tenho algumas parecidas: ${nea}`, {
        tts: true,
      })
    }
  }
};

// Exportação
module.exports = {
  name: "mn",
  execute
}