// js
const random = require("./radomActivity").randomElement
const check = require("../js/memeAbr")

// Bibliotecas
const fs = require("fs")
const path = require("path")

// Funções 
async function memeEmptyRandom () {
    // Vai ler a pasta meme e pegar todos os arquivos json
    const memeFiles = fs.readdirSync(path.join(__dirname,"../jsons/meme")).filter((fileName) => {
        return fileName.endsWith(".json")
      })
    // Vai sortear um arquivo e pega-lo
    const memeFilename = random(memeFiles)
    // Vai importar este arquivo
    const memeFile = require(`../jsons/meme/${memeFilename}`)
    // Vai retornar um id de meme aleatorio
    const meme = random(memeFile)
    return meme
}

function memeRandom (name) {
    // Verifica se é uma abreviação
    const nam = check(name)
    // Importa o arquivo
    const meme = require(`../jsons/meme/${nam}`)
    // Retorna
    return random(meme)
}

// Exporta as funções
module.exports = {
    memeEmptyRandom,
    memeRandom
}

