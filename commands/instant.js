// Importação
const { errMa } = require("../scripts/js/config");
const play = require("./play").playSong;

// Função
const execute = async (client, message, args) => {
  const song = args.join(" ");
  const queue = client.queues.get(message.guild.id);

  // Citou algo depois do comando
  if (song) {
    // Sim => Toca a imediatamente a música
    if (queue) {
      queue.songs.unshift(song); // Adiciona no primeiro da fila o song
      client.queues.set(message.guild.id, queue); // Autualiza a queue
      play(client, message, queue.songs[0]); // Chama a função play para tocar a musica
      message.channel.send("Tocando para ontem!!!", { tts: true });
    } else {
      message.channel.send("Não to tocando nada.Baralho Jéssica!!", {
        tts: true
      });
    }
  } else {
    // Não => Enivia mensagem de erro
    return message.channel.send("Vou cantar o que o Maria formiga!", {
      tts: true
    });
  }
};

// Exportação
module.exports = {
  name: "instant",
  execute
};
