// Importação do embed do help
const embed = require("./embeds/help_embed")

// Função
const execute = async (client, message, args) => {
  const somenthing = args.join(" ");
  // Citou algo depois do comando
  if (somenthing) {
    // Sim => Mensagem de erro

    // Envio
    message.channel.send(
      "Não cara como você é burro, se precisa de ajuda digita somente ?help",
      { tts: true }
    );
  } else {
    // Não => Envio de embed

    // Envio
    message.channel.send(embed);
  }
};

// Exportação
module.exports = {
  name: "help",
  execute
}