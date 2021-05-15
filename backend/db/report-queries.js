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

// Move this to the front end/component
// const getGrossIncome = (grosssales, cogs) => {
// 	let result = parseInt(grosssales) - parseInt(cogs);
// 	return { grossincome: result };
// };


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

// Return Income Report Data
const getIncomeReportDateInterval = (startDate, endDate) => {

	console.log("startenddate: ", startDate, endDate)

	// let grossSales = {};
	// let costOfGoodsSold = {};

	// // grossSales = getGrossSales(startDate, endDate)
	// // costOfGoodsSold = getCostOfGoodsSold(startDate, endDate)
	// const promiseGrossSales = getGrossSales(startDate, endDate)
	// const promiseCostOfGoodsSold = getCostOfGoodsSold(startDate, endDate)
	// const promises = [
	// 	promiseGrossSales,
	// 	promiseCostOfGoodsSold
	// ];

	// Promise.all(promises).then((all) => {
	// 	grossSales: all[0].sum
	// 	// costOfGoodsSold: all[1].sum
	// 	console.log("data inside report-queries.js: ", all[0], costOfGoodsSold)
	// });


	
	// return [ grossSales, costOfGoodsSold ];

	// new Promise((resolve, reject) => resolve( [ grossSales, costOfGoodsSold ]));

};

module.exports = {
	getIncomeReportDateInterval,
	getGrossSales,
	getCostOfGoodsSold,
	getOperatingExpenses,
	getAdminExpenses,
	getTotalIncome,
	getIncomeTax,
	getNetIncome
};
