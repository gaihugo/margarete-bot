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
    queue.dispatcher.resume() // Altera o dispatcher para resume
    message.channel.send("Lalalá lança perfume", {tts: true})
}

// Exportação
module.exports = {
    name: "resume",
    execute
}