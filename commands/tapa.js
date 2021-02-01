const Discord = require("discord.js");
const tapasIMG = require("../scripts/tapa.json");
const errsIMG = require("../scripts/errs.json");
const { randomElement } = require("../scripts/radomActivity");

module.exports.run = async (client, message, args, author, avatar) => {
  var tapaIMG = randomElement(tapasIMG);
  var errIMG = randomElement(errsIMG);
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!user) {
    const msg = `acaba de dar um tapão em ${author},você precisa de ajuda digita ?help`;
    const errs = new Discord.MessageEmbed()
      .setColor("#9cd485")
      .setTitle("Um Puta Erro!!!")
      .setAuthor(
        "Margarete",
        "https://bibliotecasma.org/wp-content/uploads/2018/07/kiki-2-274x300.png"
      )
      .setDescription("Margarete " + msg)
      .setImage(errIMG)
      .setFooter(
        "Margarete a injustiçada do Discord",
        "https://bibliotecasma.org/wp-content/uploads/2018/07/kiki-2-274x300.png"
      );
    message.channel.send(errs);
    message.channel.send("Que " + msg, { tts: true });
    message.channel.send("Que você é uma chata,insuportável!", { tts: true });
  } else {
    const msg = `${author} acaba de dar um tapão em ${user.username}`;
    const embedTapa = new Discord.MessageEmbed()
      .setColor("#E35C40")
      .setTitle("Um Puta Tapão!!!")
      .setAuthor(author, avatar)
      .setDescription(msg, { tts: true })
      .setImage(tapaIMG)
      .setFooter(
        "Margarete a bota do Discord",
        "https://bibliotecasma.org/wp-content/uploads/2018/07/kiki-2-274x300.png"
      );
    message.channel.send(embedTapa);
    message.channel.send(msg, { tts: true });
    message.channel.send("Tô passada chocada Creusa! :scream:", { tts: true });
  }
};
