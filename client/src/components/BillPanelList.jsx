import BillPanelItem from './BillPanelItem';

const BillPanelList = () => {
	return (
		<div>
			<ul>
				<li>
					<BillPanelItem name="ITEM1" date="2021-02-05" amount="$1910.99" />
				</li>
				<li>
					<BillPanelItem name="ITEM2" date="2021-06-05" amount="$-910.99" />
				</li>
				<li>
					<BillPanelItem name="ITEM3" date="2021-09-05" amount="$-120.99" />
				</li>
				<li>
					<BillPanelItem name="ITEM4" date="2021-02-05" amount="$120.99" />
				</li>
				<li>
					<BillPanelItem name="ITEM5" date="2021-02-05" amount="$15.99" />
				</li>
			</ul>
		</div>
	);
};

export default BillPanelList;
