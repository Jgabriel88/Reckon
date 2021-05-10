import GraphList from '../../components/Dashboard/GraphList';
import AccountsPanelList from '../../components/Dashboard/AccountsPanelList';
import BillPanelList from '../../components/Dashboard/BillPanelList';
import MontlyTarget from '../../components/Dashboard/MontlyTarget';
import { Container, Row, Col } from 'react-bootstrap';

import './index.scss';

const Dashboard = (props) => {
	return (
		<div className="content">
			<Container>
				<Row>
					<Col>
						<GraphList />
					</Col>
				</Row>
				<Row>
					<Col>
						<BillPanelList billList={props.billList} />
					</Col>
				</Row>
				<Row className="content_target_accounts">
					<Col xs={12} md={4}>
						<MontlyTarget />
					</Col>
					<Col xs={12} md={8}>
						<AccountsPanelList />
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default Dashboard;
