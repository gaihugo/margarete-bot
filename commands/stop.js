// Importação de Minhas predefinições
const { errMa } = require("../scripts/js/env"); // Padrões graficos da margarete

// Função
const execute = async (client, message, args, authr, avatar) => {
    const queue = client.queues.get(message.guild.id)
    // Há uma lista de reprodução
    if (!queue) {
        // Não
        return message.channel.send(errMa, {tts: true})
    }
    // Sim
    queue.dispatcher.end() // Altera o dispatcher para end 
    message.channel.send("Você quer me calar é? Vai se fuder seu merda", {tts: true})
}

// Exportação
module.exports = {
    name: "stop",
    execute
}