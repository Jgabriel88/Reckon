import React, { useEffect, useState } from 'react';

import { Container } from 'react-bootstrap';
import './Expenses.scss';
import * as FaIcons from 'react-icons/fa';
import ExpensesGraph from './ExpensesGraph';
import ExpensesSummaryList from './ExpensesSummaryList';
import axios from 'axios';

const Expense = (props) => {
	const [expenseList, setExpenseList] = useState([]);
	useEffect(() => {
		axios.get(`/api/expenses`).then((res) => {
			setExpenseList(res.data);
		});
	}, []);

	const onDelete = (id) => {
		axios.post(`/api/expenses/delete/${id}`).then((res) => {
			const newExpenseList = expenseList.filter((item) => item.id !== id);
			setExpenseList(newExpenseList);
		});
	};

	const totalExpense = expenseList.reduce(function (acc, obj) {
		return acc + obj.amount_cents;
	}, 0);

	return (
		<Container>
			<div className="header">
				<h4>
					<FaIcons.FaChartLine /> EXPENSES{' '}
				</h4>
				<hr />
				{expenseList.length && <ExpensesGraph total={totalExpense} />}
			</div>
			{expenseList.length && (
				<ExpensesSummaryList
					expenseList={expenseList}
					onDelete={onDelete}
					total={totalExpense}
				/>
			)}
		</Container>
	);
};
export default Expense;
