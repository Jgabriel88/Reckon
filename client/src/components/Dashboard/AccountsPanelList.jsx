import { Table } from 'react-bootstrap';
import './AccountPanelList.scss';
import AccountsPanelItem from './AccountsPanelItem';

const AccountsPanelList = (props) => {
	let list = props.accountList.map((account) => {
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
			<h4>ACCOUNTS</h4>
			<Table responsive="sm" borderless>
				<tbody>{list}</tbody>
			</Table>
		</div>
	);
};

export default AccountsPanelList;
