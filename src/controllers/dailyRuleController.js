const state = require('../config/state');

module.exports = {
    store(req, res) {
        const content = state.load();

        content.diariamente = req.body;

        state.save(content);

        return res.send('Horário diário cadastrado com sucesso.');
    },
    delete(_, res) {
        const content = state.load();

        content.diariamente = {};

        state.save(content);

        return res.send('Horário diário excluido com sucesso.');
    }
}