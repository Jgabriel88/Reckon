const { response } = require('express');
const db = require('./db');

const getGrossSales = (startDate, endDate) => {
	// Return Total Income (Gross Sales) 
	sqlQuery =  'SELECT SUM(amount_cents) ';
	sqlQuery += 'FROM incomes ';
	sqlQuery += 'WHERE date BETWEEN $1 AND $2;';

	return db
		.query(sqlQuery, [startDate, endDate])
		.then((response) => {
			return response.rows
		});
};

const getCostOfGoodsSold = (startDate, endDate) => {
	sqlQuery =  `SELECT SUM(amount_cents) `;
	sqlQuery += `FROM expenses `;
	sqlQuery += `WHERE category LIKE '%COGS%' OR category LIKE '%Packaging%' `;
	sqlQuery += `AND date BETWEEN $1 AND $2;`;

	return db
		.query(sqlQuery, [startDate, endDate])
		.then((response) => {
			return response.rows
		});

};

const getGrossIncome = (grossSales, costOfGoodsSold) => {
	return grossSales - costOfGoodsSold;
};

const getOperatingExpenses = (startDate, endDate) => {

};

const getAdminExpenses = (startDate, endDate) => {

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
	const grossSales 			= getGrossSales(startDate, endDate);
	const costOfGoodsSold = getCostOfGoodsSold(startDate, endDate);

	console.log("cost of goods sold: ", costOfGoodsSold)

	return { grossSales , costOfGoodsSold }

};

module.exports = {
	getIncomeReportDateInterval,
	getGrossSales
};
