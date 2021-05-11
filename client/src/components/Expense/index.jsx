import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './Expenses.scss';
import * as FaIcons from 'react-icons/fa';
import ExpensesGraph from './ExpensesGraph';
import ExpensesSummaryList from './ExpensesSummaryList';

const Expense = (props) => {
	console.log(props.expenseList);
	return (
		<Container>
			<section className="header">
				<h4>
					<FaIcons.FaChartLine /> EXPENSES{' '}
				</h4>

				<hr />
			</section>

			{props.expenseList.length && (
				<ExpensesGraph total={props.expenseList[0].sum} />
			)}
			{props.expenseList.length && (
				<ExpensesSummaryList expenseList={props.expenseList} />
			)}
		</Container>
	);
};
export default Expense;
