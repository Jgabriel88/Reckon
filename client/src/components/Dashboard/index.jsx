import GraphList from '../../components/Dashboard/GraphList';
import AccountsPanelList from '../../components/Dashboard/AccountsPanelList';
import BillPanelList from '../../components/Dashboard/BillPanelList';
import MontlyTarget from '../../components/Dashboard/MontlyTarget';
import { Container, Row, Col } from 'react-bootstrap';

import './index.scss';

const Dashboard = (props) => {
	return (
		<div className="content">
			<GraphList 
					monthlyIncomeList={props.monthlyIncomeList}
					monthlyExpenseList={props.monthlyExpenseList}
					monthlyBalanceList={props.monthlyBalanceList}
				/>
				<BillPanelList
					billList={props.billList}
					totalBills={props.totalBills}
				/>
				<div className="content_target_accounts">
					<div className="content_target">
						<MontlyTarget />
					</div>
					<div className="content_accounts">
						<AccountsPanelList accountList={props.accountList} />
					</div>
				</div>
		</div>
	);
};
export default Dashboard;
