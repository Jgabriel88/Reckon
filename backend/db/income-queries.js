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

module.exports = {
  getIncomes,
  getIncomeById,
};
