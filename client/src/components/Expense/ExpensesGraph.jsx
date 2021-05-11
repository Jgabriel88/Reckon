const ExpensesGraph = (props) => {
	return (
		<section className="expenses_summary">
			<div className="expenses_summary_graph">
				<p>This graph</p>
			</div>
			<div className="expenses_summary_details">
				<h5>Total Expenses:</h5>
				<h1>${props.total}</h1>
			</div>
		</section>
	);
};
export default ExpensesGraph;
