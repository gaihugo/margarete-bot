const Discord = require("discord.js");
const anmlsIMG = require("../scripts/animals.json");
const errsIMG = require("../scripts/errs.json");
const { randomElement } = require("../scripts/radomActivity");

module.exports.run = async (client, message, args, author, avatar) => {
  var anmlIMG = randomElement(anmlsIMG);
  var errIMG = randomElement(errsIMG);
  const somenthing = args.join(" ");
  if (somenthing) {
    const msg = `animal é você ${author}!!!,você precisa de ajuda digita ?help`;
    const errs = new Discord.MessageEmbed()
      .setColor("#9cd485")
      .setTitle("Olha o animal!!!")
      .setAuthor(
        "Margarete",
        "https://bibliotecasma.org/wp-content/uploads/2018/07/kiki-2-274x300.png"
      )
      .setDescription("O " + msg)
      .setImage(avatar)
      .setThumbnail(errIMG)
      .setFooter(
        "Margarete a injustiçada do Discord",
        "https://bibliotecasma.org/wp-content/uploads/2018/07/kiki-2-274x300.png"
      );
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
      .setAuthor(
        "Margarete",
        "https://bibliotecasma.org/wp-content/uploads/2018/07/kiki-2-274x300.png"
      )
      .setDescription(msg)
      .setImage(anmlIMG)
      .setFooter(
        "Margarete a bota do Discord",
        "https://bibliotecasma.org/wp-content/uploads/2018/07/kiki-2-274x300.png"
      );
    message.channel.send(embedTapa);
    message.channel.send(msg, { tts: true });
    message.channel.send(
      "Aqui tem um com nome biba,biba pingo,pingo? que palhaçada é essa?",
      { tts: true }
    );
  }
};
