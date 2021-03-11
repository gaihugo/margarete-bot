// Importação 
// Biblioteca
const ytdl = require("ytdl-core-discord")

// js
const {memeEmptyRandom, memeRandom} = require("../scripts/js/randomMeme")

// Funções
const execute = async (client, message, args, authr, avatar) => {
    // Verificações 
    // Variaveis
    const something = args.join(" ")
    var song = ""
    var queue = client.queues.get(message.member.guild.id)

    if (something) {
        // Caso alguem tenha escrito algo 
        song = memeRandom(something)
    } 
    if(!something) {
        // Caso não tenha algo
        song = await memeEmptyRandom()
}
    if (!message.member.voice.channel){
        message.channel.send("Loga num canal de audio o fela da puta", {tts: true})
        return
}
    // Já existe uma queue?
    if(queue){
            // Sim
            queue.songs.push(song)
            client.queues.set(message.guild.id,queue)
            return
    } else { 
            // Não
            playSong(client,message,song) }

}

const playSong = async (client, message, song) => {
    let queue = client.queues.get(message.member.guild.id)
    if (!song){
        if(queue){
            // Não tenha uma musica
            queue.connection.disconnect()
            return client.queues.delete(message.member.guild.id)
        }
    }
    
    if(!queue){
        // Não tenha uma queue
        const conn = await message.member.voice.channel.join()
        queue = {
            volume: 10,
            connection: conn,
            dispatcher: null,
            songs: [song]
        }
        queue.dispatcher = await queue.connection.play(await ytdl(`https://www.youtube.com/watch?v=${song}`),{type: "opus", filter: "audioonly",fmt: "mp3",})
        queue.dispatcher.on("finish", () => {
            queue.songs.shift()
            playSong(client, message, queue.songs[0])
        })
        client.queues.set(message.member.guild.id, queue)
    } else {
        // Já tenha uma queue
        queue.dispatcher = await queue.connection.play(await ytdl(`https://www.youtube.com/watch?v=${song}`),{type: "opus", filter: "audioonly",fmt: "mp3",})
        queue.dispatcher.on("finish", () => {
            queue.songs.shift()
            client.queues.set(message.member.guild.id, queue)
            playSong(client, message, queue.songs[0])
        })  
    }
}



// Exportação
module.exports = {
    name: "play",
    execute,
    playSong
}
