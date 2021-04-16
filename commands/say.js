// Importações de Minhas definições
const { errMessage } = require("../scripts/js/config");

// Função
const execute = async (client, message, args) => {
  const sayMessage = args.join(" ");
  // Tem a mensagem a ser enviada
  if (!sayMessage) {
    // Não
    message.channel.send(errMessage, { tts: true }); // Mensagem padrão de erro
  } else {
    // Sim
    message.delete().catch((O_o) => {}); // Pega e deleta a mensagem de pedido desse comando
    message.channel.send(sayMessage); // Envia a mensagem
  }
};

// Exportação
module.exports = {
  name: "say",
  execute
}