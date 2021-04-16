// Importação
// js
const play = require("./play").playSong // Função de tocar musica
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
    queue.songs.shift() // Apaga a musica que esta tocando
    client.queues.set(message.guild.id,queue) // Autualiza a queue
    play(client, message, queue.songs[0]) // Chama a função play para tocar a proxima musica
    message.channel.send("Vai pular as coisas na casa do caralho", {tts: true})
}

// Exportação
module.exports = {
    name: "skip",
    execute
}