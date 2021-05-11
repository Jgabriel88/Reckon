const AccountsPanelItem = (props) => {
	return (
		<tr>
			<td>{props.name}</td>
			<td>{props.type}</td>
			<td>
				{new Intl.NumberFormat('en-IN', {
					style: 'currency',
					currency: 'USD',
				}).format(props.balance_cents / 100)}
			</td>
		</tr>
	);
};

export default AccountsPanelItem;
