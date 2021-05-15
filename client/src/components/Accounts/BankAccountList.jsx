import { Link } from 'react-router-dom';
import BankAccountItem from './BankAccountItem';

import * as FaIcons from 'react-icons/fa';
import './Accounts.scss';

const BankAccountsList = (props) => {
	const sortedOperations = props.operations.sort((a, b) => b.id - a.id);

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
				<h5>Total: $ 2,198.00</h5>
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
