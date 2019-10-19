const data = require('../data.json');

module.exports = {
    index(_, res) {
        res.json(data);
    },
    store(req, res) {

    },
    delete(req, res){
        
    }
}