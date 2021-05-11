const express = require('express');
const router = express.Router();
const {
	getIncomes,
	getIncomeById,
	getMonthlyIncomes,
	addIncome,
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
router.get('/monthly', (req, res) => {
	getMonthlyIncomes().then((m) => {
		res.json(m);
	});
});

// GET /incomes/:id
router.get('/:id', (req, res) => {
	getIncomeById(req.params.id).then((income) => {
		res.json(income);
	});
});

module.exports = router;
