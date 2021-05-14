import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';

const IncomeSummaryItem = (props) => {
	const editUrl = `/income/${props.id}/${props.account_id}`;
	return (
		<tr>
			<td>{new Date(props.date).toISOString().split('T')[0]}</td>
			<td>{props.description}</td>
			<td>
				{new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
				}).format(props.amount_cents / 100)}
			</td>
			<td>{props.notes}</td>
			<td>
				<Link to={editUrl}>
					<FaIcons.FaEdit className="income_list_edit" /> |{' '}
				</Link>
				<FaIcons.FaTrashAlt
					className="income_list_delete"
					onClick={() => props.onDelete(props.id)}
				/>
			</td>
		</tr>
	);
};

export default IncomeSummaryItem;
