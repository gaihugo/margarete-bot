// Importação
const Discord = require("discord.js");
const timeOut = require("../scripts/js/radomActivity").sleep;
const play = require("../commands/play").playSong;

// Constantes
const giferr =
  "https://i.pinimg.com/originals/22/b7/e6/22b7e6967b98e2d9a0d23cc7c8d3dff0.gif";
const gif = "https://image.tutpad.com/tut/0/53/11_MONEDA.gif";

// Função
const execute = async (client, message, args) => {
  const somenthing = args.join(" ");
  var queue = client.queues.get(message.member.guild.id);
  // Citou algo depois do comando
  if (somenthing) {
    // Sim => Mensagem de erro
    message.channel.send(
      "É só girar uma moeda não preciso de mais nada!Mas Gente!",
      { tts: true }
    );
    message.channel.send(giferr);
  } else {
    // Não => Gira a moeda nada
    let num = Math.floor(Math.random() * 2);
    var embed = new Discord.MessageEmbed()
      .setDescription(
        ":full_moon_with_face: **Cara** \n \n :full_moon: **Coroa**"
      )
      .setColor("#f78345")
      .setThumbnail(gif);
    message.channel.send(embed);
    if (message.member.voice.channel) {
      if (!queue) {
        play(client, message, "f8qspc1aspE");
      } else {
        message.channel.send("Girando,rodando a moeda", { tts: true });
      }
    } else {
      message.channel.send("Girando,rodando a moeda", { tts: true });
    }

    await timeOut(2050).then(() => {
      if (num == 0) {
        message.channel.send(":full_moon:");
      } else {
        if (num == 1) {
          message.channel.send(":full_moon_with_face:");
        } else {
          console.log(num);
        }
      }
    });
  }
};

// Exportação
module.exports = {
  name: "flip",
  execute
};
