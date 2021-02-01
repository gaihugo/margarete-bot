const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const somenthing = args.join(" ");
  if (somenthing) {
    message.channel.send(
      "Não cara como você é burro, se precisa de ajuda digita somente ?help",
      { tts: true }
    );
  } else {
    const helpEmbed = new Discord.MessageEmbed()
      .setColor("#9cd485")
      .setTitle("Lista de Comandos da Margarete")
      .setURL("https://github.com/gaihugo/margarete-bot/blob/master/README.md")
      .setAuthor(
        "Margarete",
        "https://bibliotecasma.org/wp-content/uploads/2018/07/kiki-2-274x300.png"
      )
      .setDescription(
        "Silêncioo!, estão me desenvolvendo ainda eles são lerdos!A lista de comandos segue abaixo como o requisitado.Agora me de licença que eu vou fumar.:smoking:"
      )
      .setThumbnail("https://i.ytimg.com/vi/mtyD-HmKIEo/maxresdefault.jpg")
      .addFields(
        {
          name: "Comandos:",
          value: ["?help", "?clear", "?spk", "?say", "?salve", "?tapa"],
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
            "**?salve** => Escreve no chat um salve com frase aleatoria",
            " ",
            "**?tapa** => Escreve no chat uma menssagem de tapa + um gif aleatorio",
            " ",
          ],
        }
      )
      .setImage("https://i.makeagif.com/media/2-27-2018/lbSE8U.gif")
      .setTimestamp()
      .setFooter(
        "Margarete BFF Creusa",
        "https://bibliotecasma.org/wp-content/uploads/2018/07/kiki-2-274x300.png"
      );

    message.channel.send(helpEmbed);
  }
};
