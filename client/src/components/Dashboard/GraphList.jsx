import GraphListItem from './GraphListItem';
import {Container, Row, Col} from "react-bootstrap";
import "./GraphList.scss";


const GraphList = (props) => {

	console.log("graphlist: ", props)


	let monthlyIncomeList = props.monthlyIncomeList.map((monthlyIncome) => {
		return (
			<GraphListItem 
				key={monthlyIncome.month}
				month={monthlyIncome.month}
				sum={monthlyIncome.sum}
			/>
		);
	});

	let monthlyExpenseList = props.monthlyExpenseList.map((monthlyExpense) => {
		return (
			<GraphListItem
				key={monthlyExpense.month}
				month={monthlyExpense.month}
				sum={monthlyExpense.sum}
			/>
		)
	})



	return (
		<div>
			{/* <GraphListItem name="INCOME" type="BAR" />
			<GraphListItem name="EXPENSE" type="PIE" /> */}
			<Row className="graphs">
				<Col md={12} lg={4}>
					<div className="income_graph">Income
						{monthlyIncomeList}
					</div>
				</Col>
				<Col md={12} lg={4}>
					<div className="expense_graph">Expense
						{monthlyExpenseList}
					</div>
				</Col>
				<Col md={12} lg={4}><div className="balance_graph">Balances</div></Col>
			</Row>
			
			
		</div>
	);
};

export default GraphList;
