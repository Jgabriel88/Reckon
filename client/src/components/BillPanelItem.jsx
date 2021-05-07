const BillPanelItem = (props) => {
	return (
		<div>
			<p>
				{props.name}----------{props.date}------------{props.amount}
			</p>
		</div>
	);
};

export default BillPanelItem;
