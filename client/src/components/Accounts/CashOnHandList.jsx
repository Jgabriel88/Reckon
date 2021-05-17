import CashOnHandItem from './CashOnHandItem';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import './Accounts.scss';

const CashOnHandList = () => {
	return (
		<section className="account_summary_cash">
			<div className="account_summary_header">
				<h4>
					<FaIcons.FaRegMoneyBillAlt /> Cash On Hand
				</h4>
				<h5>Total: $ 580.00</h5>
				<Link to="/accounts/new">
					<button className="account_summary_btn-Add">
						<FaIcons.FaPlus />
					</button>
				</Link>
			</div>
			<CashOnHandItem />
		</section>
	);
};
export default CashOnHandList;
