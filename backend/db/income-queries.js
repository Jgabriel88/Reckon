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

const editIncome = (newData, id) => {
	let newId = parseInt(grabAccountId(newData.account));
	return db.query(
		`UPDATE incomes
	 SET account_id=$1,
	 description=$2,
	 amount_cents=$3,
   notes=$4
	 WHERE id=$5`,
		[newId, newData.description, newData.amount, newData.notes, Number(id)]
	);
};

const addIncome = (newData) => {
	let id = parseInt(grabAccountId(newData.account));
	let date = new Date();
	return db
		.query(
			'INSERT INTO incomes (user_id, account_id, description, date, amount_cents, notes) VALUES ($1,$2,$3,$4,$5,$6)',
			[1, id, newData.description, date, newData.amount, newData.notes]
		)
		.then((data) => {
			return db.query(
				`UPDATE accounts SET balance_cents = (balance_cents + $1) WHERE id = $2`,
				[newData.amount, id]
			);
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
const getMonthlyIncomes = (period) => {
	sqlQuery = 'SELECT EXTRACT(YEAR from incomes.date) AS year, ';
	sqlQuery += 'EXTRACT(MONTH from incomes.date) AS month, ';
	sqlQuery += 'sum(incomes.amount_cents) ';
	sqlQuery += 'FROM incomes ';
	sqlQuery += 'GROUP BY EXTRACT(YEAR from incomes.date), ';
	sqlQuery += 'EXTRACT(MONTH from incomes.date) ';
	sqlQuery +=
		'ORDER BY EXTRACT(YEAR from incomes.date), EXTRACT(MONTH from incomes.date) ASC LIMIT $1;';

	return db
		.query(
			sqlQuery,
			[period]
			// 'SELECT EXTRACT(MONTH FROM date) AS month,SUM(amount_cents) FROM incomes GROUP BY month ORDER BY month DESC LIMIT $1;', [period]
		)
		.then((response) => {
			return response.rows;
		});
};

const getIncomesDateInterval = (startDate, endDate) => {
	sqlQuery =  'SELECT SUM(amount_cents) ';
	sqlQuery += 'FROM incomes ';
	sqlQuery += 'WHERE date BETWEEN $1 AND $2;';

		return db
			.query(sqlQuery, [startDate, endDate])
			.then((response) => {

				console.log("response inside getIncomesDateInterval: ", response.data)

				return response.rows
			});
};

module.exports = {
	getIncomes,
	getIncomeById,
	getMonthlyIncomes,
	getIncomesDateInterval,
	addIncome,
	deleteIncome,
	editIncome,
};
