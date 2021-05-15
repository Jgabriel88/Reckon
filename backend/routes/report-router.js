const express = require('express');
const router = express.Router();
const {
	getIncomeReportDateInterval,
  getGrossSales,
  getCostOfGoodsSold
} = require('../db/report-queries');

// GET /api/reports/incomes/grosssales/:startdate/:enddate
router.get('/incomes/grosssales/:startdate/:enddate', (req, res) => {
  console.log("/api/reports/incomes/grosssales/startdate/enddate has been called")
	getGrossSales(req.params.startdate, req.params.enddate)
  .then((grossSales) => {
		res.json(grossSales);
	});
});

router.get('/incomes/grosssales/:startdate/:enddate', (req, res) => {
  console.log("/api/reports/incomes/grosssales/startdate/enddate has been called")
	getCostOfGoodsSold(req.params.startdate, req.params.enddate)
  .then((grossSales) => {
		res.json(grossSales);
	});
});



module.exports = router;
