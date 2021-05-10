const BillPanelItem = (props) => {
	return (
		<tr>
			<td>{props.id}</td>
			<td>{new Date(props.date).toISOString().split('T')[0]}</td>
			<td>{props.name}</td>
			<td>{props.amount}</td>
			<td>Edit Delete Pay</td>
		</tr>
	);
};

export default BillPanelItem;
