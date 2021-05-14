import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { Table } from 'react-bootstrap';
import ExpensesSummaryItem from './ExpensesSummaryItem';

const ExpensesSummaryList = (props) => {
	let list = props.expenseList.map((expense) => {
		return (
			<ExpensesSummaryItem
				id={expense.id}
				key={expense.id}
				payee={expense.payee}
				date={expense.date}
				category={expense.category}
				amount_cents={expense.amount_cents}
				notes={expense.notes}
				onDelete={props.onDelete}
			/>
		);
	});
	return (
		<section className="expenses_list">
			<div className="expenses_list_header">
				<h5>EXPENSES SUMMARY</h5>
				<Link to="/expenses/new">
					<button className="expenses_list_header_btn-Add">
						New <FaIcons.FaPlus />
					</button>
				</Link>
			</div>
			<Table responsive="sm"  hover>
				<thead>
					<tr>
						<th>Date</th>
						<th>Payee</th>
						<th>Category</th>
						<th>Amount</th>
						<th>Notes</th>
						<th>Action</th>
					</tr>
				</thead>

				<tbody>
					{list}
					<tr>
						<th colSpan="3">TOTAL</th>
						<th colSpan="3">
							{new Intl.NumberFormat('en-US', {
								style: 'currency',
								currency: 'USD',
							}).format(props.total / 100)}
						</th>
					</tr>
				</tbody>
			</Table>
		</section>
	);
};

export default ExpensesSummaryList;
