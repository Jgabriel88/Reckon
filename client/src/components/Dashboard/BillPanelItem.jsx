import * as FaIcons from 'react-icons/fa';
import './BillPanelItem.scss';
const BillPanelItem = (props) => {
	return (
		<tr>
			<td>{props.id}</td>
			<td>{new Date(props.date).toISOString().split('T')[0]}</td>
			<td>{props.name}</td>
			<td>
				{new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
				}).format(props.amount_cents / 100)}
			</td>
			<td>
				<FaIcons.FaCheckCircle className="bills_pay" /> |{' '}
				<FaIcons.FaEdit className="bills_edit" /> |{' '}
				<FaIcons.FaTrashAlt
					className="bills_delete"
					id={props.id}
					onClick={(event) => props.onDelete(event.currentTarget.id)}
				/>
			</td>
		</tr>
	);
};

export default BillPanelItem;
