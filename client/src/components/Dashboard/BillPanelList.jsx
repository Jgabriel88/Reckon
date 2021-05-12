import { useState, useEffect } from 'react';
import BillPanelItem from './BillPanelItem';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import './BillPanelList.scss';

const BillPanelList = (props) => {
	let list = props.billList.map((bill) => {
		console.log(bill);
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
			<h5>Upcoming Bills</h5>
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
