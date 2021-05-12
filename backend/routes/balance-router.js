const express = require('express');
const router = express.Router();
const { getMonthlyIncomes } = require('../db/income-queries');
const { getMonthlyExpenses } = require('../db/expense-queries');


// GET /balances/monthly
router.get("/monthly", (req, res) => {

  Promise.all([getMonthlyIncomes(), getMonthlyExpenses()])
    .then(([incomes, expenses]) => {
      const balances = incomes.map((income) => {
        let balance = 0;
        expenses.forEach(expense => {
          if (income.month == expense.month) {
                balance = parseInt(income.sum) - parseInt(expense.sum)
          }; 
        }); 
        return { month: income.month, sum: balance };       
      })      
      res.json(balances);
    })
});

module.exports = router;