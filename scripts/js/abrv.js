// Função
function abrv(command) {
  switch (command) {
    // Clear
    case "cl":
      return "clear";

    // Help
    case "hp":
      return "help";

    // Tapa
    case "tp":
      return "tapa";

    case "tap":
      return "tapa";

    // Salve
    case "svl":
      return "salve";

    // Anml
    case "an":
      return "anml";

    case "animal":
      return "anml";

    // Play
    case "meme":
      return "play";

    case "mm":
      return "play";

    // Volume
    case "volume":
      return "vol";

    case "v":
      return "vol";

    // Pause
    case "pa":
      return "pause";

    // Resume
    case "re":
      return "resume";

    case "continue":
      return "resume";

    // Stop
    case "st":
      return "stop";

    // Mean
    case "mean":
      return "mn";

    // Speak
    case "speak":
      return "spk";

    // Phrase
    case "phrase":
      return "ph";

    // Skip
    case "sp":
      return "skip";

    case "proxima":
      return "skip";

    // Instant
    case "in":
      return "instant";

    case "i":
      return "instant";

    case "ins":
      return "instant";

    // Flip
    case "fl":
      return "flip";

    default:
      return command;
  }
}

// Exportação
module.exports = abrv;
