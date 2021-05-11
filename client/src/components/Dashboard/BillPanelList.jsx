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
				amount={bill.amount_cents}
				id={bill.id}
			/>
		);
	});
	return (
		<div className="bills">
			<Table responsive="sm" striped hover>
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
						<th colSpan="2">{props.totalBills.total}</th>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default BillPanelList;
