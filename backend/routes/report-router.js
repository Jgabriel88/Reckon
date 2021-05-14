const express = require('express');
const router = express.Router();
const {
	getIncomeReportDateInterval,
} = require('../db/report-queries');

// GET /income/:startdate/:enddate
router.get('/:startdate/:enddate', (req, res) => {
	getIncomeReportDateInterval(req.params.startdate, req.params.enddate).then((incomeReportDateInterval) => {
		res.json(incomeReportDateInterval);
	});
});

module.exports = router;
