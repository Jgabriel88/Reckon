const db = require("./db");

const getExpenses = () => {
  return db.query("SELECT * FROM expenses;").then((response) => {
    return response.rows;
  });
};

const getExpenseById = (id) => {
  return db
    .query("SELECT * FROM expenses WHERE id = $1", [id])
    .then((response) => {
      return response.rows[0];
    });
};

module.exports = {
  getExpenses,
  getExpenseById,
};
