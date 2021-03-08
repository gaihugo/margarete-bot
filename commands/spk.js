// Importações de Minhas definições
const { errMessage } = require("../scripts/js/env");

// Função
const execute = async (client, message, args) => {
  const spkMessage = args.join(" ");
  // Tem a mensagem a ser falada
  if (!spkMessage) {
    // Não
    message.channel.send(errMessage, { tts: true }); // Mensagem padrão de erro
  } else {
    // Sim
    message.delete().catch((O_o) => {});  // Pega e deleta a mensagem de pedido desse comando
    message.channel.send(spkMessage, { tts: true }); // Envia a mensagem em tts
  }
};

// Exportação
module.exports = {
  name: "spk",
  execute
}