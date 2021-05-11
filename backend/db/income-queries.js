const { response } = require('express');
const db = require('./db');

const getIncomes = () => {
	return db
		.query(
			'SELECT * FROM incomes, (SELECT SUM(amount_cents) FROM incomes) AS total;'
		)
		.then((response) => {
			return response.rows;
		});
};

const grabAccountId = (srt) => {
	return srt.split(' ')[0];
};

const addIncome = (newData) => {
	let id = parseInt(grabAccountId(newData.account));
	let date = new Date();
	return db.query(
		'INSERT INTO incomes (user_id, account_id, description, date, amount_cents, notes) VALUES ($1,$2,$3,$4,$5,$6)',
		[1, id, newData.description, date, newData.amount, newData.notes]
	);
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
			'SELECT EXTRACT(MONTH FROM date) AS month,SUM(amount_cents) FROM incomes GROUP BY month ORDER BY month DESC LIMIT 6;'
		)
		.then((response) => {
			return response.rows;
		});
};

module.exports = {
	getIncomes,
	getIncomeById,
	getMonthlyIncomes,
	addIncome,
};
