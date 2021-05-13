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

const deleteExpense = (id) => {
	return db.query('DELETE FROM expenses WHERE id = $1;', [id]).then((res) => {
		return res.rows;
	});
};

const grabAccountId = (srt) => {
	return srt.split(' ')[0];
};

const addExpense = (newData) => {
	let id = parseInt(grabAccountId(newData.account));
	return db.query(
		'INSERT INTO expenses (user_id, account_id, category, date, amount_cents, payee, notes) VALUES ($1,$2,$3,$4,$5,$6,$7)',
		[
			1,
			id,
			newData.category,
			newData.date,
			newData.amount,
			newData.payee,
			newData.notes,
		]
	);
};

// Return total expenses per month for the last 6 months
const getMonthlyExpenses = (period) => {

	sqlQuery =  'SELECT EXTRACT(YEAR from expenses.date) AS year, ';
	sqlQuery += 'EXTRACT(MONTH from expenses.date) AS month, ';
	sqlQuery += 'sum(expenses.amount_cents) ';
	sqlQuery += 'FROM expenses ';
	sqlQuery += 'GROUP BY EXTRACT(YEAR from expenses.date), ';
	sqlQuery += 'EXTRACT(MONTH from expenses.date) ';
	sqlQuery += 'ORDER BY EXTRACT(YEAR from expenses.date), EXTRACT(MONTH from expenses.date) ASC LIMIT $1;';

	return db
		.query(sqlQuery, [period]
			// 'SELECT EXTRACT(MONTH FROM date) AS month, SUM(amount_cents) FROM expenses GROUP BY month ORDER BY month DESC LIMIT $1;', [period]
		)
		.then((response) => {
			return response.rows;
		});
};

module.exports = {
	getExpenses,
	getExpenseById,
	getMonthlyExpenses,
	addExpense,
	deleteExpense,
};
