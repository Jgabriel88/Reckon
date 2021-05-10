const AccountsPanelItem = (props) => {
	return (
		<div>
			<p>
				{props.name}----------------{props.amount}
			</p>
		</div>
	);
};

export default AccountsPanelItem;
