const db = require('./db');

const getBills = () => {
	return db
		.query('SELECT * FROM bills WHERE is_paid = false;')
		.then((response) => {
			return response.rows;
		});
};

const getTotalBills = () => {
	return db
		.query('SELECT SUM(amount_cents) as total FROM bills WHERE is_paid = false;')
		.then((response) => {
			return response.rows[0];
		});
};

const getBillsById = (id) => {
	return db
		.query('SELECT * FROM bills WHERE id = $1', [id])
		.then((response) => {
			return response.rows[0];
		});
};

module.exports = {
	getBills,
	getBillsById,
	getTotalBills,
};
