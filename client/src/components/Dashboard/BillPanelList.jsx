import { Link } from 'react-router-dom';
import BillPanelItem from './BillPanelItem';

import { Table } from 'react-bootstrap';
import './BillPanelList.scss';
import * as FaIcons from 'react-icons/fa';

const BillPanelList = (props) => {
	let list = props.billList.map((bill) => {
		return (
			<BillPanelItem
				key={bill.id}
				date={bill.due_date}
				name={bill.payee}
				amount_cents={bill.amount_cents}
				id={bill.id}
				onDelete={props.onDelete}
			/>
		);
	});

	return (
		<div className="bills">
			<div className="bills_header">
				<h5>Upcoming Bills</h5>
				<Link to="/bills/new">
					<button className="income_list_header_btn-Add">
						New <FaIcons.FaPlus />
					</button>
				</Link>
			</div>
			<Table responsive="sm" hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Due</th>
						<th>Payee</th>
						<th>Amount</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{list}
					<tr>
						<th colSpan="3">TOTAL</th>
						<th colSpan="2">
							{new Intl.NumberFormat('en-US', {
								style: 'currency',
								currency: 'USD',
							}).format(props.totalBills / 100)}
						</th>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default BillPanelList;
