const express = require('express');
const router = express.Router();
const {
	getExpenses,
	getExpenseById,
	getMonthlyExpenses,
	addExpense,
	deleteExpense,
} = require('../db/expense-queries');

// const otherRouter = require('./more-routes/something');
// GET /products/pins/...
// router.use('/pins', otherRouter);

// GET /maps/7/pins/42
// router.get('/:id/pins/:pin_id', () => {});

// router-specific middleware
router.use((req, res, next) => {
	// if (!req.session.user_id) {
	//   res.redirect('/login');
	// }

	console.log('the expense router has been called');
	next();

	// longrunningProcess().then(() => {
	//   next();
	// });
});

// GET /expenses/
router.get('/', (req, res) => {
	getExpenses().then((expenses) => {
		res.json(expenses);
	});
});

router.post('/', (req, res) => {
	addExpense(req.body.newData)
		.then((data) => res.send('success'))
		.catch((err) => console.log('ERROR', err));
});

router.post('/delete/:id', (req, res) => {
	deleteExpense(req.params.id).then((rows) => {
		res.json(rows);
	});
});

// GET /expenses/monthly/:period
router.get('/monthly/:period', (req, res) => {
	const period = req.params.period || 6;
	getMonthlyExpenses(period).then((expenses) => {
		res.json(expenses);
	});
});

// GET /expenses/monthly
router.get('/monthly', (req, res) => {
	getMonthlyExpenses().then((expenses) => {
		res.json(expenses);
	});
});

// GET /expenses/:id
router.get('/:id', (req, res) => {
	getExpenseById(req.params.id).then((expense) => {
		res.json(expense);
	});
});

module.exports = router;
