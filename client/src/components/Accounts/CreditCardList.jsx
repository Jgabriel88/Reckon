import CreditCardItem from './CreditCardItem';
import { Link } from 'react-router-dom';

import * as FaIcons from 'react-icons/fa';
import './Accounts.scss';

const CreditCardsList = () => {
	return (
		<section className="account_summary_ccard">
			<div className="account_summary_header">
				<h4>
					<FaIcons.FaCcMastercard /> Credit Cards
				</h4>
				<Link to="/accounts/new">
					<button className="account_summary_btn-Add">
						<FaIcons.FaPlus />
					</button>
				</Link>
			</div>
			<CreditCardItem />
		</section>
	);
};
export default CreditCardsList;
