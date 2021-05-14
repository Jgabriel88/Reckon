import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './BillPanelItem.scss';
const BillPanelItem = (props) => {
	const id = props.id;
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
				<Link to={`/bills/pay/${id}`}>
					<FaIcons.FaShare className="bills_pay" />{' '}
				</Link>
				<Link to="/bills/new">
					<FaIcons.FaEdit className="bills_edit" />{' '}
				</Link>
				<FaIcons.FaTrashAlt
					className="bills_delete"
					id={props.id}
					onClick={() => props.onDelete(props.id)}
				/>
			</td>
		</tr>
	);
};

export default BillPanelItem;
