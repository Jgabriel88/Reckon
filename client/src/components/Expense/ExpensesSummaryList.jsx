import * as FaIcons from 'react-icons/fa';
import { Table } from 'react-bootstrap';
import ExpensesSummaryItem from './ExpensesSummaryItem';

const ExpensesSummaryList = (props) => {
	let list = props.expenseList.map((expense) => {
		console.log('expense', expense);
		return (
			<ExpensesSummaryItem
				id={expense.id}
				key={expense.id}
				payee={expense.payee}
				date={expense.date}
				category={expense.category}
				amount={expense.amount_cents}
			/>
		);
	});
	return (
		<section className="expenses_list">
			<div className="expenses_list_header">
				<h5>EXPENSES SUMMARY</h5>
				<button className="expenses_list_header_btn-Add">
					New <FaIcons.FaPlus />
				</button>
			</div>
			<Table responsive="sm" striped hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Date</th>
						<th>Payee</th>
						<th>Category</th>
						<th>Amount</th>
						<th>Action</th>
						<th>Notes</th>
					</tr>
				</thead>

				<tbody>
					{list}
					<tr>
						<th colSpan="4">TOTAL</th>
						<th colSpan="3">{props.expenseList[0].sum}</th>
					</tr>
				</tbody>
			</Table>
		</section>
	);
};

export default ExpensesSummaryList;