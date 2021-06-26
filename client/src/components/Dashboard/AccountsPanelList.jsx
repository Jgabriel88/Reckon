import { Table } from 'react-bootstrap';
import './AccountPanelList.scss';
import AccountsPanelItem from './AccountsPanelItem';

const AccountsPanelList = (props) => {
	let list = props.accountList.map((account) => {
		console.log(account);
		return (
			<AccountsPanelItem
				key={account.id}
				name={account.name}
				balance_cents={account.balance_cents}
				type={account.type}
			/>
		);
	});

	return (
		<div className="accounts">
			<h4>Accounts</h4>
			<div className="accounts_list">
				<Table responsive="sm">
					<tbody>{list}</tbody>
				</Table>
			</div>
		</div>
	);
};

export default AccountsPanelList;
