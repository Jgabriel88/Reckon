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

const deleteIncome = (id) => {
	return db.query('DELETE FROM incomes WHERE id = $1;', [id]).then((res) => {
		return res.rows;
	});
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
const getMonthlyIncomes = (period) => {

	sqlQuery =  'SELECT EXTRACT(YEAR from incomes.date) AS year, ';
	sqlQuery += 'EXTRACT(MONTH from incomes.date) AS month, ';
	sqlQuery += 'sum(incomes.amount_cents) ';
	sqlQuery += 'FROM incomes ';
	sqlQuery += 'GROUP BY EXTRACT(YEAR from incomes.date), ';
	sqlQuery += 'EXTRACT(MONTH from incomes.date) ';
	sqlQuery += 'ORDER BY EXTRACT(YEAR from incomes.date), EXTRACT(MONTH from incomes.date) ASC LIMIT $1;';

	return db
		.query(sqlQuery, [period]
			// 'SELECT EXTRACT(MONTH FROM date) AS month,SUM(amount_cents) FROM incomes GROUP BY month ORDER BY month DESC LIMIT $1;', [period]
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
	deleteIncome,
};
