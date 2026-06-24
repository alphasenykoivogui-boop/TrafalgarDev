// Module
const fs = require('fs')

//Bot Settings
global.connect = true // True For Pairing // False For Qr
global.publicX = true // True For Public // False For Self
global.owner = ['224620503751'] //Own Number
global.developer = "Trafalgardev" //Dev Name
global.botname = "SLAYXBUG" //Bot Name
global.version = "10.0" //Version Bot

//Sticker Setiings
global.packname = "Sticker By TRAFALGAR Dev" //Pack Name 
global.author = "Dev_Trafalgar" // Author

//Social Media Settings
global.linkSaluran = "https://whatsapp.com/channel/0029VbAvypq2UPBJjcDISH1z"
global.idSaluran = "120363418402368091@newsletter" 
global.namaSaluran = "ZALLDEV"
global.ytube = ""
global.ttok = ""
global.igram = ""
global.chtele = ""
global.tgram = ""

//Bug Name Settings
global.bak = {
Ios: "MIKASSAXZALLCRASHER? ",
Andro: "CRASHMIKASSA?-", 
Crash: " ̶⿻ᬃLEVICRASHER? ̶",
Freeze: "⿻ᬃZALLCRASHER?",
Ui: "⿻ᬃRANDYXZALL?"
}

//System Bot Settings
global.prefa = ['','!','.',',','🐤','🗿'] // Prefix // Not Change

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
