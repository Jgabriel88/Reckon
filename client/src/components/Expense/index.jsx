import React from 'react';
import { Container } from 'react-bootstrap';
import './Expenses.scss';
import * as FaIcons from 'react-icons/fa';
import ExpensesGraph from './ExpensesGraph';
import ExpensesSummaryList from './ExpensesSummaryList';

const Expense = (props) => {
	console.log(props.expenseList);
	return (
		<Container>
			<div className="header">
				<h4><FaIcons.FaChartLine /> EXPENSES{' '}</h4>
				<hr />
				{props.expenseList.length && (
				<ExpensesGraph total={props.expenseList[0].sum} />
			)}
			</div>
			{props.expenseList.length && (
				<ExpensesSummaryList expenseList={props.expenseList} />
			)}
		</Container>
	);
};
export default Expense;
