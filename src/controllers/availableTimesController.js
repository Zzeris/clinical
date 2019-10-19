const data = require('../data.json');

module.exports = {
    index(req, res) {
        const { date1, date2 } = req.params;

        const start = new Date(date1.split('-').reverse());
        const end = new Date(date2.split('-').reverse());

        let result = data.umDiaEspecifico.filter(element => {
            let date = new Date(element.dia.split('-').reverse());
            return date >= start && date <= end
        });

        if (result.length === 0) result = 'Não hà atendimento neste intervalo de datas informadas, tente outro.'

        res.json(result);
    },
    show(req, res) {
        const { date1 } = req.params;

        let result = data.umDiaEspecifico.filter(element => element.dia === date1);

        if (result.length === 0) result = 'Não hà atendimento nesta data, tente outra.'

        res.json(result);
    }
}