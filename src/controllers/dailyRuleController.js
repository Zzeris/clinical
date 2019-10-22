const fs = require('fs');
const dataFilePath = './data.json';

module.exports = {
    async store(req, res) {
        const fileBuffer = fs.readFileSync(dataFilePath, 'utf-8');

        const dataJson = JSON.parse(fileBuffer);

        dataJson.diariamente = req.body;

        const dataString = JSON.stringify(dataJson);

        fs.writeFileSync(dataFilePath, dataString);

        res.send('Horário diário cadastrado com sucesso.');
    },
    delete(_, res) {
        const fileBuffer = fs.readFileSync(dataFilePath, 'utf-8');

        const dataJson = JSON.parse(fileBuffer);

        dataJson.diariamente = {};

        const dataString = JSON.stringify(dataJson);

        fs.writeFileSync(dataFilePath, dataString);

        res.send('Horário diário excluido com sucesso.');
    }
}