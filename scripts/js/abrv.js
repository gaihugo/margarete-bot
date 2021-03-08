// Função
function abrv (command) {
    switch (command) {
        // Clear
        case "cl":
            return "clear"

        // Help
        case "hp":
            return "help"

        // Tapa
        case "tp":
            return "tapa" 
        
        case "tap":
            return "tapa" 
   
        // Salve
        case "svl":
            return "salve"

        // Anml
        case "an":
            return "anml"      

        default:
            return command
    }
}

// Exportação
module.exports = abrv