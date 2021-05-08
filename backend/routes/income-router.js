const express = require("express");
const router = express.Router();
const { getIncomes, getIncomeById } = require("../db/income-queries");

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

module.exports = router;