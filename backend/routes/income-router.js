const express = require('express');
const router = express.Router();
const {
	getIncomes,
	getIncomeById,
	getMonthlyIncomes,
	addIncome,
	deleteIncome,
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

router.post('/delete/:id', (req, res) => {
	deleteIncome(req.params.id).then((rows) => {
		res.json(rows);
	});
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
