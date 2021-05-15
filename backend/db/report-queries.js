const { response } = require('express');
const db = require('./db');

const getGrossSales = (startDate, endDate) => {
	// Return Total Income (Gross Sales) 
	sqlQuery =  'SELECT SUM(amount_cents) ';
	sqlQuery += 'FROM incomes ';
	sqlQuery += 'WHERE date BETWEEN $1 AND $2;';

	return db
		.query(sqlQuery, [startDate, endDate]).then((response) => {
			console.log("gross response: ", response.rows[0])
			return [{ grosssales: response.rows[0].sum }]
		});
};

const getCostOfGoodsSold = (startDate, endDate) => {
	sqlQuery =  `SELECT SUM(amount_cents) `;
	sqlQuery += `FROM expenses `;
	sqlQuery += `WHERE category LIKE '%COGS%' OR category LIKE '%Packaging%' `;
	sqlQuery += `AND date BETWEEN $1 AND $2;`;

	return db
		.query(sqlQuery, [startDate, endDate]).then((response) => {
			return [{ cogs: response.rows[0].sum }]
		});

};

const getOperatingExpenses = (startDate, endDate) => {
	sqlQuery =  `SELECT SUM(amount_cents) AS operatingexpenses `;
	sqlQuery += `FROM expenses `;
	sqlQuery += `WHERE category LIKE '%Payroll%' `;
	sqlQuery += `OR category LIKE '%Insurance%' `;
	sqlQuery += `OR category LIKE '%Utilities%' `;
	sqlQuery += `AND date BETWEEN $1 AND $2;`;

	return db
		.query(sqlQuery, [startDate, endDate]).then((response) => {
			return response.rows
		})

};

const getAdminExpenses = (startDate, endDate) => {
	sqlQuery  = `SELECT SUM(amount_cents) AS adminexpenses `;
	sqlQuery += `FROM expenses `;
	sqlQuery += `WHERE category LIKE '%General%' `;
	sqlQuery += `OR category LIKE '%Bank%' `;
	sqlQuery += `AND date BETWEEN $1 AND $2;`;

	return db
		.query(sqlQuery, [startDate, endDate]).then((response) => {
			return response.rows
		})
};

const getTotalIncome = (grossIncome, operatingExpenses, adminExpenses) => {

};

const getIncomeTax = (totalIncome, tax) => {
	return totalIncome * (tax/100);
};

const getNetIncome = (totalIncome, incomeTax) => {
	return totalIncome - incomeTax;
}


module.exports = {
	getGrossSales,
	getCostOfGoodsSold,
	getOperatingExpenses,
	getAdminExpenses,
	getTotalIncome,
	getIncomeTax,
	getNetIncome
};
