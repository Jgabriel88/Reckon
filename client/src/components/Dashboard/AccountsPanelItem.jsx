const AccountsPanelItem = (props) => {
	return (
		<tr>
			<td>{props.name}</td>
			<td>{props.type}</td>
			<td>{props.balance_cents}</td>
		</tr>
	);
};

export default AccountsPanelItem;
