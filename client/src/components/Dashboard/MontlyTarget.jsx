import './MonthlyTarget.scss';
import { useState } from 'react';

const MonthlyTarget = (props) => {
	let balance = (props.totalIncome - props.totalExpense) / 100;
	console.log(props);
	return (
		<div className="target">
			<h1>
				{new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
				}).format(balance)}
			</h1>
		</div>
	);
};

export default MonthlyTarget;
