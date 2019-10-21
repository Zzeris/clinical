const router = require('express').Router();
const rulesController = require('./controllers/rulesController');
const dailyRuleController = require('./controllers/dailyRuleController');
const weeklyRuleController = require('./controllers/weeklyRuleController');
const availableTimesController = require('./controllers/availableTimesController');

router.get('/regras', rulesController.index);

router.post('/regra/diariamente', dailyRuleController.store);
router.delete('/regra/diariamente', dailyRuleController.delete);

router.post('/regra/semanalmente', weeklyRuleController.store);
router.delete('/regra/semanalmente', weeklyRuleController.delete);

router.post('/regra/horarios-disponiveis', availableTimesController.store);
router.delete('/regra/horarios-disponiveis/:date', availableTimesController.delete);

router.get('/horarios-disponiveis/:date1&:date2', availableTimesController.index);
router.get('/horarios-disponiveis/:date1', availableTimesController.show);

module.exports = router;