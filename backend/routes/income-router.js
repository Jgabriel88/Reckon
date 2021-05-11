const express = require("express");
const router = express.Router();
const { getIncomes, getIncomeById, getMonthlyIncomes } = require("../db/income-queries");

// GET /incomes/
router.get("/", (req, res) => {
  getIncomes().then((incomes) => {
    res.json(incomes);
  });
});

// GET /incomes/:id
router.get("/:id", (req, res) => {
  getIncomeById(req.params.id).then((income) => {
    res.json(income);
  });
});

// GET /incomes/monthly
router.get("/monthly", (req, res) => {
  getMonthlyIncomes().then((monthly) => {
    res.json(monthly);
  });
});

module.exports = router;
