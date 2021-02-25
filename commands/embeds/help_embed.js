//Escreve no chat o significado da palavra que foi escrito ao lado do comando
const Discord = require("discord.js");
const { avatarM, color, thum, gif } = require("../../scripts/js/env");

const helpEmbed = new Discord.MessageEmbed()
      .setColor(color)
      .setTitle("Lista de Comandos da Margarete")
      .setURL("https://github.com/gaihugo/margarete-bot/blob/master/README.md")
      .setAuthor("Margarete", avatarM)
      .setDescription(
        "Silêncioo!, estão me desenvolvendo ainda eles são lerdos!A lista de comandos segue abaixo como o requisitado.Agora me de licença que eu vou fumar.:smoking:"
      )
      .setThumbnail(thum)
      .addFields(
        {
          name: "Comandos:",
          value: [
            "?help **ou** ?hp",
            "?clear **ou** ?cl",
            "?spk",
            "?say",
            "?salve **ou** ?svl",
            "?tapa **ou** ?tp",
            "?anml **ou** ?an",
            "?ph",
            "?mn",
          ],
          inline: true,
        },
        {
          name: "Como deve ser escrito:",
          value: [
            "?help",
            "?clear",
            "?spk + algo a ser falado",
            "?say + algo a ser escrito",
            "?salve",
            "?tapa + @pessoa",
            "?anml",
            "?ph + pensador",
            "?mn + palavra"
          ],
          inline: true,
        },
        {
          name: "Ação:",
          value: [
            "**?help** => Escreve no chat a lista de comandos da Margarete",
            " ",
            "**?clear** => Apaga as mensagens do chat (Limitado)",
            " ",
            "**?spk** => Fala com voz de narradora aquilo escrito ao lado (Limitado)",
            " ",
            "**?say** => Escreve no chat aquilo escrito ao lado",
            " ",
            "**?salve** => Escreve no chat um salve com frase aleatória",
            " ",
            "**?tapa** => Escreve no chat uma menssagem de tapa + um gif aleatório",
            " ",
            "**?anml** => Envia no chat a foto de um animal aleatório",
            " ",
            "**?ph** => Escreve no chat uma frase aleatória do pensador citado ao lado",
            " ",
            "**?mn** => Escreve no chat o significado da palavra que foi escrita ao lado",
            " ",
          ],
        }
      )
      .setImage(gif)
      .setTimestamp()
      .setFooter("Margarete BFF Creusa", avatarM);

module.exports = { embed: helpEmbed }