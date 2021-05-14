const db = require('./db');

const grabAccountId = (srt) => {
	return srt.split(' ')[0];
};

const getBills = () => {
	return db
		.query('SELECT * FROM bills WHERE is_paid = false;')
		.then((response) => {
			return response.rows;
		});
};

const addBill = (newData) => {
	return db.query(
		'INSERT INTO bills (user_id, amount_cents, payee, due_date) VALUES ($1,$2,$3,$4)',
		[1, newData.amount, newData.payee, newData.date]
	);
};

const editBill = (newData, id) => {
	let newId = parseInt(grabAccountId(newData.account));
	return db
		.query(
			`UPDATE bills
		 SET is_paid = true
		WHERE id=$1`,
			[Number(id)]
		)
		.then((data) => {
			return db.query(
				`INSERT INTO expenses (user_id, account_id, category, date, amount_cents, payee, notes) VALUES ($1,$2,$3,$4,$5,$6,$7)`,
				[
					1,
					Number(newId),
					newData.category,
					newData.date,
					newData.amount,
					newData.payee,
					'test notes',
				]
			);
		});
};

const getTotalBills = () => {
	return db
		.query(
			'SELECT SUM(amount_cents) as total FROM bills WHERE is_paid = false;'
		)
		.then((response) => {
			return response.rows[0];
		});
};

const deleteBill = (id) => {
	return db.query('DELETE FROM bills WHERE id = $1;', [id]).then((res) => {
		return res.rows;
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
	deleteBill,
	addBill,
	editBill,
};
