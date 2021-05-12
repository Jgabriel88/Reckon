const express = require('express');
const router = express.Router();
const {
	getBills,
	getBillsById,
	getTotalBills,
	deleteBill,
} = require('../db/bill-queries');

// GET /bills/
router.get('/', (req, res) => {
	getBills().then((bills) => {
		res.json(bills);
	});
});

router.post('/delete/:id', (req, res) => {
	deleteBill(req.body.billId).then((rows) => {
		res.json(rows);
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
