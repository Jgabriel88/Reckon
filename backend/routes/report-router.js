const express = require('express');
const { getOperatingExpenses } = require('../db/report-queries');
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

router.get('/incomes/operatingexpenses/:startdate/:enddate', (req, res) => {
	getOperatingExpenses(req.params.startdate, req.params.enddate)
  .then((oe) => {
		res.json(oe);
	});
});

module.exports = router;
