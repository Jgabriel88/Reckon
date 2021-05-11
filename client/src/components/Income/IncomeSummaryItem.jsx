import * as FaIcons from 'react-icons/fa';

const IncomeSummaryItem = () => {
	return (
		<tr>
			<td>1</td>
			<td>06/22/2021</td>
			<td>Daily Sales</td>
			<td>$ 2,350.00</td>
			<td>
				<FaIcons.FaEdit className="income_list_edit" /> |{' '}
				<FaIcons.FaTrashAlt className="income_list_delete" />
			</td>
		</tr>
	);
};

export default IncomeSummaryItem;
