import { useEffect, useState } from 'react';
import ExpenseGraphItem from './ExpenseGraphItem';
import axios from 'axios';


const ExpensesGraph = (props) => {

	console.log(props.total);
	
	let [expenseList, setExpenseList] = useState([]);


	useEffect(() => {
		axios.get('/api/expenses/monthly/12').then((res) => {
			setExpenseList(res.data);
		})
	}, [props.eList]);

	return (
		<section className="expenses_summary">
			<div className="expenses_summary_graph">
				<ExpenseGraphItem
					data={expenseList}
				/>
			</div>
			<div className="expenses_summary_details">
				<h5>Total Expenses:</h5>
				<h1>
					{new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(props.total / 100)}
				</h1>
			</div>
		</section>
	);
};
export default ExpensesGraph;
