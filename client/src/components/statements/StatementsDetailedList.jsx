import StatementsDetailedItem from './StatementsDetailedItem';

const StatementsDetailedList = () => {
	return (
		<div>
			<ul>
				<li>
					<StatementsDetailedItem id="1" date="2021-02-05" amount="$1910.99" />
				</li>
				<li>
					<StatementsDetailedItem id="2" date="2021-06-05" amount="$-910.99" />
				</li>
				<li>
					<StatementsDetailedItem id="3" date="2021-09-05" amount="$-120.99" />
				</li>
				<li>
					<StatementsDetailedItem id="4" date="2021-02-05" amount="$120.99" />
				</li>
				<li>
					<StatementsDetailedItem id="5" date="2021-02-05" amount="$15.99" />
				</li>
			</ul>
		</div>
	);
};

export default StatementsDetailedList;
