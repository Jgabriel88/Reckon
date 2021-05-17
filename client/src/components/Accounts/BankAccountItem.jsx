import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import './Accounts.scss';

const BankAccountItem = (props) => {
	const [accountDetails, setAccountDetails] = useState(false);
	const showDetails = () => setAccountDetails(!accountDetails);
	const list = props.operations.map((operation) => {
		if (operation.payee) {
			return (
				<tr>
					<td>{new Date(operation.date).toISOString().split('T')[0]}</td>
					<td>Withdrawal</td>
					<td>
						-
						{new Intl.NumberFormat('en-US', {
							style: 'currency',
							currency: 'USD',
						}).format(operation.amount_cents / 100)}
					</td>
				</tr>
			);
		} else {
			return (
				<tr>
					<td>{new Date(operation.date).toISOString().split('T')[0]}</td>
					<td>Deposit</td>
					<td>
						{new Intl.NumberFormat('en-US', {
							style: 'currency',
							currency: 'USD',
						}).format(operation.amount_cents / 100)}
					</td>
				</tr>
			);
		}
	});

	return (
		<>
			<div className="account_summary_details">
				<div>
					<h5>{props.account[0].name}</h5>
					<p>{props.account[0].type} 06301-123455</p>
				</div>
				<div className="align-center">
					<p>
						{new Intl.NumberFormat('en-US', {
							style: 'currency',
							currency: 'USD',
						}).format(props.account[0].balance_cents / 100)}
					</p>
				</div>
				<div>
					<button
						class="account_summary_details_btn_show"
						onClick={showDetails}>
						<FaIcons.FaEllipsisV />
					</button>
				</div>
			</div>
			<div
				className={
					accountDetails
						? 'account_summary_details_show active'
						: 'account_summary_details_show'
				}>
				<Table striped hover>
					<thead>
						<tr>
							<th>Date</th>
							<th>Activity</th>
							<th>Amount</th>
						</tr>
					</thead>
					<tbody>{list}</tbody>
				</Table>
			</div>
		</>
	);
};
export default BankAccountItem;
