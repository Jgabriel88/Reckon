import AccountsPanelItem from './AccountsPanelItem';
import {Table} from "react-bootstrap";
import "./AccountPanelList.scss";

const AccountsPanelList = (props) => {
	return (
		<div className="accounts">
			<h4>ACCOUNTS</h4>
			<hr></hr>
			<Table responsive="sm" borderless>
					<tbody>
						<tr>
							<td>Cash On Hand</td>
							<td>$ 400.00</td>
						</tr>
						<tr>
							<td>RBC - Checking ****5800</td>
							<td>$ 4,000.00</td>
						</tr>
						<tr>
							<td>TD - Checking ****1400</td>
							<td>$ 400.00</td>
						</tr>
						<tr>
							<th></th>
							<th colSpan="2">$ 4,800.00</th>
						</tr>
					</tbody>
				</Table>
		</div>
	);
};

export default AccountsPanelList;
