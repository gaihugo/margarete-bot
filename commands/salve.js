// Importações de Minhas definições
const { salveMsg } = require("../scripts/js/radoms"); // Mensagem aleatorio de salve
const { errMessage } = require("../scripts/js/config"); // Padrões graficos da margarete

// Função
const execute = async (client, message, args) => {
  const somenthing = args.join(" ");
  // Escreveu algo ao lado do comando
  if (somenthing) {
    // Sim => Mensagem de erro
    message.channel.send(errMessage, { tts: true });
  } else {
    // Não => Mensagem de salve
    const svl = "Salve! ";
    message.reply(svl + salveMsg(), { tts: true });
  }
};

// Exportação
module.exports = {
  name: "salve",
  execute
}