const router = require('express').Router();
const ruleController = require('./controllers/ruleController');
const availableTimesController = require('./controllers/availableTimesController');

router.get('/regras', ruleController.index);
router.post('/regra', ruleController.store);
router.delete('/regra/:type/:date', ruleController.delete);

router.get('/horarios-disponiveis/:date1&:date2', availableTimesController.index);
router.get('/horarios-disponiveis/:date1', availableTimesController.show);

module.exports = router;