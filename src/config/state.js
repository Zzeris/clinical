const fs = require('fs');
const dataFilePath = './data.json';

function save(content) {
    const dataString = JSON.stringify(content);
    return fs.writeFileSync(dataFilePath, dataString);
}

function load() {
    const fileBuffer = fs.readFileSync(dataFilePath, 'utf-8');
    const dataJson = JSON.parse(fileBuffer);
    return dataJson
}

module.exports = {
    save,
    load
}