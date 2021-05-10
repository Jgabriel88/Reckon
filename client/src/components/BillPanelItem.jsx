
const BillPanelItem = (props) => {
	return (
		<tr>
			<td>1</td>
			<td>{props.date}</td>
			<td>{props.name}</td>
			<td>{props.amount}</td>
			<td>Edit Delete</td>
		</tr>
	);
};

export default BillPanelItem;
