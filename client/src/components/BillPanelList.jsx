import BillPanelItem from './BillPanelItem';
import {Table} from "react-bootstrap"
import "./BillPanelList.scss";

const BillPanelList = () => {
	return (
		<div className="bills">
			<Table responsive="sm" striped hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Due</th>
							<th>Payee</th>
							<th>Amount</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>6/22/2021</td>
							<td>Bell Canada ***0628</td>
							<td>$105.90</td>
							<td>Edit Delete</td>
						</tr>
						<tr>
							<td>1</td>
							<td>6/22/2021</td>
							<td>Bell Canada ***0628</td>
							<td>$105.90</td>
							<td>Edit Delete</td>
						</tr><tr>
							<td>1</td>
							<td>6/22/2021</td>
							<td>Bell Canada ***0628</td>
							<td>$105.90</td>
							<td>Edit Delete</td>
						</tr>
						<BillPanelItem />
						<tr>
							<th colSpan="3">TOTAL</th>
							<th colSpan="2">$317.7</th>
						</tr>
					</tbody>
				</Table>
		</div>
	);
};

export default BillPanelList;
