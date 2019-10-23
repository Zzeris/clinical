const state = require('../config/state');

module.exports = {
    store(req, res) {
        const content = state.load();

        content.semanalmente = req.body;

        state.save(content);

        return res.send('Horário semanal cadastrado com sucesso.');
    },
    delete(_, res) {
        const content = state.load();

        content.semanalmente = {};

        state.save(content);

        return res.send('Horário semanal excluido com sucesso.');
    }
}