import AccountsPanelItem from './AccountsPanelItem';

const AccountsPanelList = (props) => {
	return (
		<div>
			<ul>
				<li>
					<AccountsPanelItem name="ACCOUNT1" amount="$1910.99" />
				</li>
				<li>
					<AccountsPanelItem name="ACCOUNT2" amount="$-910.99" />
				</li>
				<li>
					<AccountsPanelItem name="ACCOUNT3" amount="$-120.99" />
				</li>
				<li>
					<AccountsPanelItem name="ACCOUNT4" amount="$120.99" />
				</li>
				<li>
					<AccountsPanelItem name="ACCOUNT5" amount="$15.99" />
				</li>
			</ul>
		</div>
	);
};

export default AccountsPanelList;
