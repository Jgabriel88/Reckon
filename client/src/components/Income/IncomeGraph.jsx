const IncomeGraph = (props) => {
	return (
		<section className="income_summary">
			<div className="income_summary_graph">
				<p>This graph</p>
			</div>
			<div className="income_summary_details">
				<h5>Total Income</h5>
				<h1>${props.total}</h1>
			</div>
		</section>
	);
};

export default IncomeGraph;
