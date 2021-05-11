const db = require('./db');

const getExpenses = () => {
	return db
		.query(
			'SELECT * FROM expenses, (SELECT SUM(amount_cents) FROM expenses) AS total;'
		)
		.then((response) => {
			return response.rows;
		});
};

const getExpenseById = (id) => {
	return db
		.query('SELECT * FROM expenses WHERE id = $1', [id])
		.then((response) => {
			return response.rows[0];
		});
};

// Return total expenses per month for the last 6 months
const getMonthlyExpenses = () => {
	return db
		.query(
			"SELECT to_char(EXTRACT(MONTH FROM date),'FM00') AS month, SUM(amount_cents) FROM expenses GROUP BY month ORDER BY month DESC LIMIT 6;"
		)
		.then((response) => {
			return response.rows;
		});
};

module.exports = {
	getExpenses,
	getExpenseById,
	getMonthlyExpenses,
};
