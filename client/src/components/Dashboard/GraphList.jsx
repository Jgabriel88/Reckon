import GraphListItem from './GraphListItem';
import {Container, Row, Col} from "react-bootstrap";
import "./GraphList.scss";
import { Chart } from 'react-charts';
import react from 'react';

const GraphList = (props) => {
	
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

	const data = react.useMemo(
		() => [
			{
				label: 'Thousands',
				data: [['Dec', 175], ['Jan', 125], ['Feb', 152], ['Mar', 155], ['Apr', 160], ['May', 135]]
			}
		],
		[]
	)

	const series = react.useMemo(
    () => ({
      type: "bar"
    }),
    []
  );
	 
	const axes = react.useMemo(
		() => [
			{ primary: true, type: 'ordinal', position: 'bottom' },
			{ position: "left", type: "linear", stacked: true }
		],
		[]
	)
	 
	const lineChart = (
		// A react-chart hyper-responsively and continuously fills the available
		// space of its parent element automatically
		<div
			style={{
				width: '290px',
				height: '150px'
			}}
		>
			<Chart data={data} series={series} axes={axes} />
		</div>
	)



	return (

		<div>
			{/* <GraphListItem name="INCOME" type="BAR" />
			<GraphListItem name="EXPENSE" type="PIE" /> */}
			<Row className="graphs">
				<Col md={12} lg={4}>
					<div className="income_graph">Income
						{/* {monthlyIncomeList} */}
						{lineChart}
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
