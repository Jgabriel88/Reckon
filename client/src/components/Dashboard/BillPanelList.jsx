import BillPanelItem from './BillPanelItem';
import { Table } from 'react-bootstrap';
import './BillPanelList.scss';

const BillPanelList = (props) => {
	let list = props.billList.map((bill) => {
		return (
			<BillPanelItem
				key={bill.id}
				date={bill.due_date}
				name={bill.payee}
				amount_cents={bill.amount_cents}
				id={bill.id}
			/>
		);
	});
	return (
		<div className="bills">
			<h5>Upcoming Transactions</h5>
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
							}).format(props.totalBills.total / 100)}
						</th>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default BillPanelList;
