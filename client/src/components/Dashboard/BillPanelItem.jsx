const BillPanelItem = (props) => {
	return (
		<tr>
			<td>{props.id}</td>
			<td>{props.date}</td>
			<td>{props.name}</td>
			<td>{props.amount}</td>
			<td>Edit Delete</td>
		</tr>
	);
};

export default BillPanelItem;
