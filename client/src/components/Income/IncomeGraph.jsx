import { useEffect, useState } from 'react';
import IncomeGraphItem from './IncomeGraphItem';
import axios from 'axios';

const IncomeGraph = (props) => {

	let [incomeList, setIncomeList] = useState([]);

	useEffect(() => {
		axios.get('/api/incomes/monthly/12').then((res) => {
			setIncomeList(res.data);
		});
	}, [props.iList]);


	return (
		<section className="income_summary">
			<div className="income_summary_graph">
				<IncomeGraphItem
					data={incomeList}
				/>
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
