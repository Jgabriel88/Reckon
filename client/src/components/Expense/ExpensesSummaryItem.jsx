import * as FaIcons from 'react-icons/fa';

const ExpensesSummaryItem = (props) => {
	return (
		<tr>
			<td>{new Date(props.date).toISOString().split('T')[0]}</td>
			<td>{props.payee}</td>
			<td>{props.category}</td>
			<td>
				{new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
				}).format(props.amount_cents / 100)}
			</td>
			<td>{props.notes}</td>
			<td>
				<FaIcons.FaEdit className="expenses_list_edit" /> |{' '}
				<FaIcons.FaTrashAlt
					className="expenses_list_delete"
					onClick={() => props.onDelete(props.id)}
				/>
			</td>
		</tr>
	);
};

export default ExpensesSummaryItem;
