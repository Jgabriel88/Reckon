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

	console.log("grossSales: ", grossSales)

	return { grossSales }

};

module.exports = {
	getIncomeReportDateInterval,
	getGrossSales
};
