const express = require('express');
const router = express.Router();
const {
	getIncomeReportDateInterval,
  getGrossSales
} = require('../db/report-queries');

// GET /api/reports/income/:startdate/:enddate
router.get('/income/:startdate/:enddate', (req, res) => {
  console.log("/api/reports/income/startdate/enddate has been called")
	getIncomeReportDateInterval(req.params.startdate, req.params.enddate)
  .then((incomeReportDateInterval) => {
		res.json(incomeReportDateInterval);
	});
});

module.exports = router;
