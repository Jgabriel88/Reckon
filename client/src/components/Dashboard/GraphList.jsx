import GraphListItem from './GraphListItem';
import {Row, Col} from "react-bootstrap";
import "./GraphList.scss";
import { Chart } from 'react-charts';
import react from 'react';
import useGraph from '../../hooks/useGraph';

const GraphList = (props) => {

	return (

		<div>
			{/* <GraphListItem name="INCOME" type="BAR" />
			<GraphListItem name="EXPENSE" type="PIE" /> */}
			<Row className="graphs">
				<Col md={12} lg={4}>
					<div className="income_graph">Income
						<GraphListItem
							data={props.monthlyIncomeList}
						/>
					</div>
				</Col>
				<Col md={12} lg={4}>
					<div className="expense_graph">Expense
						<GraphListItem
							data={props.monthlyExpenseList}
						/>
					</div>
				</Col>
				<Col md={12} lg={4}><div className="balance_graph">Balances</div></Col>
			</Row>
			
			
		</div>
	);
};

export default GraphList;
