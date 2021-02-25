function abrv (command) {
    switch (command) {
        case "cl":
            return "clear"

        case "hp":
            return "help"

        case "tp":
            return "tapa"          
   
        case "svl":
            return "salve"

        case "an":
            return "anml"      

        default:
            return command
    }
}

module.exports = abrv