// Importação de bibliotecas
const Discord = require("discord.js");

// Importações de Minhas definições
const phrase = require("../scripts/js/api/pensador"); // Função que pesquisa uma frase de um pensador
const { errIMG } = require("../scripts/js/radoms"); // Imagem de erro
const { avatarM, color, thum } = require("../scripts/js/env"); // Padrões graficos da margarete

// Função
const execute = async (client, message, args, author) => {
  const auth = args.join(" ");
  // Citou um autor
  if (!auth) {
    // Não => Mensagem de erro

    // Embed
    const errs = new Discord.MessageEmbed()
      .setColor(color)
      .setTitle("Uma livrada na cara!!!")
      .setAuthor("Margarete", avatarM)
      .setDescription(`**${author},você precisa de ajuda digita ?help**`)
      .setImage(errIMG())
      .setThumbnail(thum)
      .setTimestamp()
      .setFooter("Margarete a empregada do Discord", avatarM);

    // Envio
    message.channel.send(errs);
    message.channel.send(
      `${author}, não aguento mais você errando vou te dar uma livrada na cara!`,
      { tts: true }
    );
  } else {
    // Sim => Mensagem de frase

    // Parametros
    const text = await phrase(auth);
    const ph = text.text;
    const atr = text.author;

    // Embed
    const embed = new Discord.MessageEmbed()
      .setColor("#f7e1eb")
      .setTitle(`Uma Frase de ${atr}`)
      .setURL("https://www.pensador.com/")
      .setAuthor("Margarete", avatarM)
      .setDescription(`"${ph}" **Pensador**`)
      .setTimestamp()
      .setThumbnail("https://i.ytimg.com/vi/mtyD-HmKIEo/maxresdefault.jpg")
      .setFooter("Margarete a Biblotecária do Discord", avatarM);

    // Envio
    message.channel.send(embed);
    message.channel.send("tric,tric,tric, Comi o cú de quem tá lendo!", {
      tts: true,
    });
  }
};

// Exportação
module.exports = {
  name: "ph",
  execute
}