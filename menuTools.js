const fs = require('fs')

function saveFile(StringForTxt) {
    fs.writeFile('/Users/adria/OneDrive/Documentos/notepad.txt', `${StringForTxt}`, function(err) {
        if (err) throw err;
    })
    console.log('save')
}
  
module.exports = saveFile