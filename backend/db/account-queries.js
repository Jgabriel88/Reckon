const db = require("./db");

const getAccounts = () => {
  return db.query("SELECT * FROM accounts;").then((response) => {
    return response.rows;
  });
};

const getAccountsById = (id) => {
  return db
    .query("SELECT * FROM accounts WHERE id = $1", [id])
    .then((response) => {
      return response.rows[0];
    });
};

module.exports = {
  getAccounts,
  getAccountsById,
};
