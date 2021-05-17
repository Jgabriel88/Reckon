import { Link } from 'react-router-dom';
import BankAccountItem from './BankAccountItem';

import * as FaIcons from 'react-icons/fa';
import './Accounts.scss';

const BankAccountsList = (props) => {
	console.log('1', props.operations);
	const propsArray = [...props.operations];
	const sortedOperations = propsArray.sort(function (a, b) {
		var dateA = new Date(a.date),
			dateB = new Date(b.date);
		return dateA - dateB;
	});
	console.log('2', sortedOperations);

	const list = props.account.map((account) => {
		return (
			<BankAccountItem account={props.account} operations={sortedOperations} />
		);
	});

	return (
		<section className="account_summary_bank">
			<div className="account_summary_header">
				<h4>
					<FaIcons.FaDonate /> Bank Accounts
				</h4>
				<Link to="/accounts/new">
					<button className="account_summary_btn-Add">
						<FaIcons.FaPlus />
					</button>
				</Link>
			</div>

			{list}
		</section>
	);
};
export default BankAccountsList;
