// Importação de Minhas predefinições
const { errMa } = require("../scripts/js/config"); // Padrões graficos da margarete

// Função
const execute = async (client, message, args, authr, avatar) => {
    const queue = client.queues.get(message.guild.id)
    // Há uma lista de reprodução
    if (!queue) {
        // Não
        return message.channel.send(errMa, {tts: true})
    }
    // Sim
    queue.dispatcher.pause()  // Altera o dispatcher para pause
    message.channel.send("Cala a boca você!", {tts: true})
}

// Exportação
module.exports = {
    name: "pause",
    execute
}