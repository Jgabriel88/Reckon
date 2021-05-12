import { useState, useEffect } from 'react';
import BillPanelItem from './BillPanelItem';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import './BillPanelList.scss';

const BillPanelList = (props) => {
	const [bills, setBills] = useState(props.billList);
	const deleteBill = (billId) => {
		axios.post(`/api/bills/delete/${billId}`, { billId }).then((res) => {
			setBills(res.data);
		});
	};

	// useEffect(() => {}, [bills]);

	let list = bills.map((bill) => {
		return (
			<BillPanelItem
				key={bill.id}
				date={bill.due_date}
				name={bill.payee}
				amount_cents={bill.amount_cents}
				id={bill.id}
				onDelete={deleteBill}
			/>
		);
	});

	const totalBills = bills.reduce(function (acc, obj) {
		return acc + obj.amount_cents;
	}, 0);

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
							}).format(totalBills / 100)}
						</th>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default BillPanelList;
