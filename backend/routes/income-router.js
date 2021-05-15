const express = require('express');
const router = express.Router();
const {
	getIncomes,
	getIncomeById,
	getMonthlyIncomes,
	getIncomesDateInterval,
	addIncome,
	deleteIncome,
	editIncome,
} = require('../db/income-queries');

// GET /incomes/
router.get('/', (req, res) => {
	getIncomes().then((incomes) => {
		res.json(incomes);
	});
});

router.post('/', (req, res) => {
	addIncome(req.body.newData)
		.then((data) => res.send('success'))
		.catch((err) => console.log('ERROR', err));
});

// GET /incomes/monthly
router.get('/monthly/', (req, res) => {
	const period = req.params.period || 6;
	getMonthlyIncomes().then((monthlyIncomes) => {
		res.json(monthlyIncomes);
	});
});

// GET /incomes/monthly/:period
router.get('/monthly/:period', (req, res) => {
	const period = req.params.period || 6;
	getMonthlyIncomes(period).then((monthlyIncomes) => {
		res.json(monthlyIncomes);
	});
});


router.post('/delete/:id', (req, res) => {
	deleteIncome(req.params.id).then((rows) => {
		res.json(rows);
	});
});

router.post('/edit/:id', (req, res) => {
	editIncome(req.body.newData, req.params.id).then((rows) => {
		res.json(rows);
	});
});

// GET /incomes/:id
router.get('/:id', (req, res) => {
	getIncomeById(req.params.id).then((income) => {
		res.json(income);
	});
});

// GET /income/:startdate/:enddate
router.get('/:startdate/:enddate', (req, res) => {
	getIncomesDateInterval(req.params.startdate, req.params.enddate).then((incomesDateInterval) => {
		res.json(incomesDateInterval);
	});
});
module.exports = router;
