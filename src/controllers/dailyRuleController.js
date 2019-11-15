const state = require('../config/state');
const format = require('../config/formatHours');

module.exports = {
    store(req, res) {
        const { horaInicio, horaFim } = req.body;

        const result = format.Hours(horaInicio, horaFim);

        if (result) return res.send(result);

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