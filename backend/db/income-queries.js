const { response } = require('express');
const db = require('./db');

const getIncomes = () => {
	return db
		.query('SELECT * FROM incomes, (SELECT SUM(amount) FROM incomes) AS total;')
		.then((response) => {
			return response.rows;
		});
};

const getIncomeById = (id) => {
	return db
		.query('SELECT * FROM incomes WHERE id = $1', [id])
		.then((response) => {
			return response.rows[0];
		});
};

// Return total income per month for the last 6 months
const getMonthlyIncomes = () => {
	return db
		.query(
			"SELECT to_char(EXTRACT(MONTH FROM date),'FM00') AS month,SUM(amount) FROM incomes GROUP BY month ORDER BY month DESC LIMIT 6;"
		)
		.then((response) => {
			return response.rows;
		});
};

module.exports = {
	getIncomes,
	getIncomeById,
	getMonthlyIncomes,
};
