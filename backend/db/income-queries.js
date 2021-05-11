const { response } = require("express");
const db = require("./db");

const getIncomes = () => {
  return db.query("SELECT * FROM incomes;").then((response) => {
    return response.rows;
  });
};

const getIncomeById = (id) => {
  return db
    .query("SELECT * FROM incomes WHERE id = $1", [id])
    .then((response) => {
      return response.rows[0];
    });
};

// Return total income per month for the last 6 months
const getMonthlyIncomes = () => {
  return db
    .query("SELECT EXTRACT(MONTH FROM date) AS month,SUM(amount) FROM incomes GROUP BY month ORDER BY month DESC LIMIT 6;")
    .then((response) => {
      return response.rows;
    });
}

// Return total expenses per month for the last 6 months
const getMonthlyExpenses = () => {
  return db
    .query("SELECT EXTRACT(MONTH FROM date) AS month, SUM(amount_cents) FROM expenses GROUP BY month LIMIT 6;;")
    .then((response) => {
      return response.rows;
    });
}

module.exports = {
  getIncomes,
  getIncomeById,
  getMonthlyIncomes,
  getMonthlyExpenses,
};
