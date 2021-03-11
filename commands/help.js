// Importação do embed do help
const {embeds}= require("./embeds/help_embed")

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

    // Envio de embed
    message.channel.send(await embeds(message));
  }
};

// Exportação
module.exports = {
  name: "help",
  execute
}