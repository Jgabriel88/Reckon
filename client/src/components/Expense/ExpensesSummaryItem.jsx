import * as FaIcons from 'react-icons/fa';

const ExpensesSummaryItem = (props) => {
	return (
		<tr>
			<td>{props.id}</td>
			<td>{new Date(props.date).toISOString().split('T')[0]}</td>
			<td>{props.payee}</td>
			<td>{props.category}</td>
			<td>{props.amount_cents}</td>
			<td>Clarify what is this</td>
			<td>
				<FaIcons.FaEdit className="expenses_list_edit" /> |{' '}
				<FaIcons.FaTrashAlt className="expenses_list_delete" />
			</td>
		</tr>
	);
};

export default ExpensesSummaryItem;
