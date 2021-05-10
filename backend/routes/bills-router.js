const express = require('express');
const router = express.Router();
const { getBills, getBillsById, getTotalBills } = require('../db/bill-queries');

// GET /bills/
router.get('/', (req, res) => {
	getBills().then((bills) => {
		res.json(bills);
	});
});

// GET /bills/total
router.get('/total', (req, res) => {
	getTotalBills().then((total) => {
		res.json(total);
	});
});

// GET /bills/:id
router.get('/:id', (req, res) => {
	getBillsById(req.params.id).then((bill) => {
		res.json(bill);
	});
});

module.exports = router;
