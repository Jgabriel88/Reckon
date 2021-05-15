const express = require('express');
const router = express.Router();
const {
	getIncomeReportDateInterval,
  getGrossSales,
  getCostOfGoodsSold
} = require('../db/report-queries');

// GET /api/reports/incomes/grosssales/:startdate/:enddate
router.get('/incomes/grosssales/:startdate/:enddate', (req, res) => {
	getGrossSales(req.params.startdate, req.params.enddate)
  .then((grossSales) => {
		res.json(grossSales);
	});
});

router.get('/incomes/cogs/:startdate/:enddate', (req, res) => {
	getCostOfGoodsSold(req.params.startdate, req.params.enddate)
  .then((cogs) => {
		res.json(cogs);
	});
});

module.exports = router;
