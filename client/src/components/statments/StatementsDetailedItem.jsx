const StatementsDetailedItem = (props) => {
	return (
		<div>
			<p>
				{props.id}----------{props.date}------------{props.amount_cents}
			</p>
		</div>
	);

	export default BillPanelItem;
};

export default StatementsDetailedItem;
