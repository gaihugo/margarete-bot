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
    const number = Number(args.join(" "))
    // O valor passado é um numero 
    if (!number || isNaN(number) || number < 0 || number > 10) {
        // Não
        return message.channel.send("Só sei contar de 0 até 10 caralho!",{tts:true})
    } else {
        // Sim
        queue.dispatcher.setVolume(number/10)  // Altera o volume do dispatcher
        queue.volume = number // Altera o volume da queue
        client.queues.set(message.guild.id, queue) // Autualiza a queue
    }
}

// Exportação
module.exports = {
    name: "vol",
    execute
}