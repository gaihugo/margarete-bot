// Importação de bibliotecas
const fetch = require("node-fetch")
const parse = require("fast-xml-parser")
const encode = require("urlencode")

// Funções
async function getNear (word) {
    // Pega a palavra proxima
    const search = encode(word)
    const ul = `https://api.dicionario-aberto.net/near/${search}`
    const resp = await fetch(ul)
    const dat = await resp.json()
    return dat
}

async function getMean (word){
    // Pega o significado
    const search = encode(word)
    const url = `https://api.dicionario-aberto.net/word/${search}`
    const response = await fetch(url)
    const data = await response.json()
 
    if (data.length == 0){
        const ne = await getNear(word)
        if (ne == []){
            return {
                asw: true
            }
        } else {
            const me = await ne.toString()
            return {
                ne: true,
                word: word,
                near: me  
            }
        }
    } else {

        const str = data[0].xml
        const obj = parse.parse(str)
        const wo = obj.entry.form.orth
        
        if (obj.entry.sense) {
            const mne = obj.entry.sense.def
            
            if (mne == undefined){
                const mn = obj.entry.sense[0].def
                return {
                    mean: mn,
                    title: wo
                }
                
            } else {
                return {
                    mean: mne,
                    title: wo
                    }
                }
            }
        }
    }
        
    // Exportação
    module.exports = getMean