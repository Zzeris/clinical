const state = require('../config/state');

module.exports = {
    index(req, res) {
        const { date1, date2 } = req.params;

        const content = state.load();

        const start = new Date(date1.split('-').reverse());
        const end = new Date(date2.split('-').reverse());

        let result = content.diaEspecifico.filter(element => {
            let date = new Date(element.dia.split('-').reverse());
            return date >= start && date <= end
        });

        if (result.length === 0) result = 'Não hà atendimento neste intervalo de datas informadas, tente outro.'

        return res.json(result);
    },
    show(req, res) {
        const { date1 } = req.params;

        const content = state.load();

        let result = content.diaEspecifico.filter(element => element.dia === date1);

        if (result.length === 0) result = 'Não hà atendimento nesta data, tente outra.'

        return res.json(result);
    },
    store(req, res) {
        const { dia } = req.body;

        const content = state.load();

        const result = content.diaEspecifico.filter(element => element.dia === dia);

        if (result.length > 0) return res.send(`Dia ${dia} já cadastrado.`);

        content.diaEspecifico.push(req.body);

        state.save(content);

        return res.send(`Dia ${dia} cadastrado com sucesso.`);
    },
    delete(req, res) {
        const { date } = req.params;

        const content = state.load();

        const result = content.diaEspecifico.filter(element => element.dia === date);

        if (result.length === 0) return res.send('Dia inválido.');

        content.diaEspecifico.splice(content.diaEspecifico.indexOf(result[0]), 1);
        
        state.save(content);

        return res.send(`Dia ${date} excluido com sucesso.`);
    }
}