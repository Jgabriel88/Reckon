const IncomeGraph = (props) => {
	return (
		<section className="income_summary">
			<div className="income_summary_graph">
				<p>This graph</p>
			</div>
			<div className="income_summary_details">
				<h5>Total Income</h5>
				<h1>
					{new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(props.total / 100)}
				</h1>
			</div>
		</section>
	);
};

export default IncomeGraph;
