import { Link } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import './Income.scss';
import IncomeSummaryItem from './IncomeSummaryItem';

const IncomeSummaryList = (props) => {
	let total = props.incomeList[0];
	console.log(total);
	let list = props.incomeList.map((income) => {
		console.log('INCOME', income);
		return (
			<IncomeSummaryItem
				id={income.id}
				key={income.id}
				date={income.date}
				description={income.description}
				amount={income.amount}
			/>
		);
	});

	return (
		<section className="income_list">
			<div className="income_list_header">
				<h5>INCOME SUMMARY</h5>
				
				<Link to="/income/new">
					<button className="income_list_header_btn-Add">
						New <FaIcons.FaPlus />
					</button>
				</Link>
			</div>
			<Table responsive="sm" striped hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Date</th>
						<th>Description</th>
						<th>Amount</th>
						<th>Action</th>
					</tr>
				</thead>

				<tbody>
					{list}
					<tr>
						<th colSpan="3">TOTAL</th>
						<th colSpan="2">{props.incomeList[0].sum}</th>
					</tr>
				</tbody>
			</Table>
		</section>
	);
};

export default IncomeSummaryList;
