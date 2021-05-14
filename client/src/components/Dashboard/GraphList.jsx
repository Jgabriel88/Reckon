import GraphListItem from './GraphListItem';
import "./GraphList.scss";

const GraphList = (props) => {

	return (

		<div>
			{/* <GraphListItem name="INCOME" type="BAR" />
			<GraphListItem name="EXPENSE" type="PIE" /> */}
			<div className="graphs">
				<div className="income_graph">
					<p>INCOMES</p>
					<GraphListItem
						data={props.monthlyIncomeList}
					/>
				</div>
				<div className="expense_graph">
					<p>EXPENSES</p>	
					<GraphListItem
						data={props.monthlyExpenseList}
					/>
				</div>
				<div className="balance_graph">
					<p>BALANCE</p>
					<GraphListItem
						data={props.monthlyBalanceList}
					/>
				</div>
			</div>
		</div>
	);
};

export default GraphList;