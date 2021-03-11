function checkMeme (name) {
    // Checar se existe uma abreviação para o meme
    switch (name) {
        // Inês Brasil
        case "inês":
            return "ines";

        case "in":
            return "ines";

        case "inês brasil":
            return "ines";
        
        case "ines brasil":
            return "ines";
        
        case "inesbrasil":
            return "tulla";

        // Tulla Luana
        case "tula":
            return "tulla";

        case "tl":
            return "tulla";

        case "tulla luana":
            return "tulla";
        
        case "web diva":
            return "tulla";

        case "web diva tulla luana":
            return "tulla";
        
        case "tullaluana":
            return "tulla";
        
        // Sense Marcia
        case "sense marcia":
            return "marcia";

        case "sense":
            return "marcia";

        case "mc":
            return "marcia";
        
        case "sensemarcia":
            return "marcia";
    
        default:
            return name
    }
}

// Exporta a função
module.exports = checkMeme