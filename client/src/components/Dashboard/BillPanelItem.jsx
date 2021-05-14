import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './BillPanelItem.scss';
const BillPanelItem = (props) => {
	console.log('props', props);
	const id = props.id;
	const payee = props.name;
	const amount = props.amount_cents;
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
				<Link to={{ pathname: `/bills/pay/${id}`, state: { payee, amount } }}>
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
