// Importação de bibliotecas
const Discord = require("discord.js");
const Pagination = require("discord.js-pagination");

// Importação de padroes graficos
const { avatarM, color, prefix, thum } = require("../../scripts/js/config");
// Parametros
const p = prefix;

async function embed(message) {
  // Embed 1
  const page1 = new Discord.MessageEmbed()
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
          "-----------**G E R A I S**-----------",
          " ",
          `${p}help **ou** ${p}hp`,
          `${p}clear **ou** ${p}cl`,
          `${p}speak **ou** ${p}spk`,
          `${p}say`,
          `${p}salve **ou** ${p}svl`,
          `${p}tapa **ou** ${p}tp`,
          `${p}animal **ou** ${p}anml`,
          `${p}ph`,
          `${p}mean **ou** ${p}mn`,
          `${p}flip **ou** ${p}fl`,
          " ",
          "-------------**M E M E S**-------------",
          " ",
          `${p}play **ou** ${p}meme **ou** ${p}mm`,
          `${p}pause **ou** ${p}pa`,
          `${p}resume **ou** ${p}re`,
          `${p}skip **ou** ${p}sp`,
          `${p}stop **ou** ${p}st`,
          `${p}volume **ou** ${p}vol`,
          `${p}instant **ou** ${p}in`,
          " "
        ],
        inline: true
      },
      {
        name: "Como deve ser escrito:",
        value: [
          "----------**G E R A I S**------------",
          " ",
          `${p}help`,
          `${p}clear`,
          `${p}spk + algo a ser falado`,
          `${p}say + algo a ser escrito`,
          `${p}salve`,
          `${p}tapa + @pessoa`,
          `${p}anml`,
          `${p}ph + pensador`,
          `${p}mn + palavra`,
          `${p}flip`,
          " ",
          "-------------**M E M E S**-------------",
          " ",
          `${p}meme **ou** ${p}meme + categoria`,
          `${p}pause`,
          `${p}resume`,
          `${p}skip`,
          `${p}stop`,
          `${p}volume + numero de 0 a 10`,
          `${p}instant + id do Youtube do som`,
          " "
        ],
        inline: true
      },
      {
        name:
          "-------------------------------------------------------------------------------",
        value:
          ":warning: **OBS: Reaja a mensagem para mudar de página** :warning:"
      }
    )
    .setTimestamp();

  // Embed 2
  const page2 = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle("Lista de Comandos da Margarete")
    .setURL("https://github.com/gaihugo/margarete-bot/blob/master/README.md")
    .setAuthor("Margarete", avatarM)
    .setThumbnail(thum)
    .addFields({
      name: "Ação:",
      value: [
        "-----------------------------**G E R A I S**--------------------------------",
        " ",
        `**${p}help** => Escreve no chat a lista de comandos da Margarete`,
        " ",
        `**${p}clear** => Apaga as mensagens do chat (Limitado)`,
        " ",
        `**${p}spk** => Fala com voz de narradora aquilo escrito ao lado (Limitado)`,
        " ",
        `**${p}say** => Escreve no chat aquilo escrito ao lado`,
        " ",
        `**${p}salve** => Escreve no chat um salve com frase aleatória`,
        " ",
        `**${p}tapa** => Escreve no chat uma menssagem de tapa + um gif aleatório`,
        " ",
        `**${p}anml** => Envia no chat a foto de um animal aleatório`,
        " ",
        `**${p}ph** => Escreve no chat uma frase aleatória do pensador citado ao lado`,
        " ",
        `**${p}mn** => Escreve no chat o significado da palavra que foi escrita ao lado`,
        " ",
        `**${p}flip** => Gira uma moeda e mostra o resultado`,
        " ",
        "**OBS: Reaja a mensagem para mudar de página**"
      ]
    })
    .setTimestamp();

  // Embed 3
  const page3 = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle("Lista de Comandos da Margarete")
    .setURL("https://github.com/gaihugo/margarete-bot/blob/master/README.md")
    .setAuthor("Margarete", avatarM)
    .setThumbnail(thum)
    .addFields({
      name: "Ação:",
      value: [
        "-----------------------------**M E M E S**--------------------------------",
        " ",
        `**${p}meme** => Reproduz no seu canal de audio um meme de uma categoria ao aleatorio`,
        " ",
        `**${p}pause** => Pausa o meme que está a reproduzindo`,
        " ",
        `**${p}resume** => Retoma o meme que estava sendo reproduzido`,
        " ",
        `**${p}skip** => Pula para outro meme na queue`,
        " ",
        `**${p}stop** => Para de reproduzir o meme e sai do canal de voz`,
        " ",
        `**${p}volume** => Altera o volume do meme`,
        " ",
        `**${p}instant** => Toca imediatamente a musica citada ao lado (Não apaga a fila)`,
        " ",
        "**OBS: Reaja a mensagem para mudar de página**"
      ]
    })
    .setTimestamp();

  // Embed 4
  const page4 = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle("Lista de Comandos da Margarete")
    .setURL("https://github.com/gaihugo/margarete-bot/blob/master/README.md")
    .setAuthor("Margarete", avatarM)
    .setThumbnail(thum)
    .addFields({
      name: "Categoria de memes:",
      value: [
        "-----------------------------**M E M E S**--------------------------------",
        " ",
        `**INES BRASIL** => (Pode digitar das seguintes formas) => in, ines, inesbrasil`,
        " ",
        `**TULLA LUANA** => (Pode digitar das seguintes formas) => tl, tulla, tullaluana`,
        " ",
        `**MARCIA SENSITIVA** => (Pode digitar das seguintes formas) => mc, marcia, sensemarcia`,
        " ",
        "**OBS: Reaja a mensagem para mudar de página**"
      ]
    })
    .setTimestamp();

  var pages = [page1, page2, page3, page4];
  Pagination(message, pages);
}

// Exportação
module.exports = {
  embeds: embed
};
