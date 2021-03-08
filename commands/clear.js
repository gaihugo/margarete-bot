// Importação de mensagem de erro
const { errMessage } = require("../scripts/js/env");

// Função
const execute = async (client, message, args) => {
  const somenthing = args.join(" ");
  // Citou algo depois do comando
  if (somenthing) {
    // Sim => Menssagem de erro

    // Envio
    message.channel.send(errMessage, { tts: true });
  } else {
    // Não => Apaga as mensagens + mensagem de sucesso

    // Apagar
    const fetched = await message.channel.messages.fetch({ limit: 100 });
    message.channel.bulkDelete(fetched, { filterOld: false });
    message.channel.bulkDelete(fetched, { filterOld: true });

    // Envio
    message.channel.send("Tudo limpo, já escondi o corpo");
  }
};

// Exportação
module.exports = {
  name: "clear",
  execute
}