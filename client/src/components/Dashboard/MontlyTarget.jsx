import "./MonthlyTarget.scss";

const MonthlyTarget = (props) => {
	console.log("Monthly target props ->", props)

	const totalExpenses = props.monthlyBalanceList.reduce(function (acc, obj) {
		return acc + obj.sum;
	}, 0);
	console.log(totalExpenses)

	return (
			<div className="target">
				<h1>	{new Intl.NumberFormat('en-US', {
								style: 'currency',
								currency: 'USD',
							}).format(totalExpenses / 100)}</h1>
				<p>Historical Income - Expenses</p>
			</div>
		)};

export default MonthlyTarget;
