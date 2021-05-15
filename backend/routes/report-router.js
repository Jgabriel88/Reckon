const express = require('express');
const router = express.Router();
const {
	getIncomeReportDateInterval,
  getGrossSales,
  getCostOfGoodsSold,
  getGrossIncome
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

// router.get('/incomes/grossincome/:grosssales/:cogs', (req, res) => {
// 	getGrossIncome(parseInt(req.params.grosssales) - parseInt(req.params.cogs))
//   .then((cogs) => {
// 		res.json(cogs);
// 	});
// });

module.exports = router;
