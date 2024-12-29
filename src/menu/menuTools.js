const fs = require('fs');
const { dialog } = require('electron');

module.exports.saveFile = async (StringForTxt) => {
    await dialog.showSaveDialog({
        filters: [
            {
                name: 'txt',
                extensions: ['txt']
            },
        ],
    }).then((r) => {
        fs.writeFile(r.filePath, `${StringForTxt.toString()}`, function (err) {
            if (err) console.error(err);
        });

        if (r.canceled) dialog.showMessageBox({
            message: 'O salvamento do arquivo foi cancelado.',
            buttons: ['é foda'],
            type: 'warning',
        });
    });
};
