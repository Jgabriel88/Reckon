import * as FaIcons from 'react-icons/fa';

const IncomeSummaryItem = (props) => {
	console.log(props);
	return (
		<tr>
			<td>{props.id}</td>
			<td>{new Date(props.date).toISOString().split('T')[0]}</td>
			<td>{props.description}</td>
			<td>
				{new Intl.NumberFormat('en-IN', {
					style: 'currency',
					currency: 'USD',
				}).format(props.amount_cents / 100)}
			</td>
			<td>
				<FaIcons.FaEdit className="income_list_edit" /> |{' '}
				<FaIcons.FaTrashAlt className="income_list_delete" />
			</td>
		</tr>
	);
};

export default IncomeSummaryItem;
