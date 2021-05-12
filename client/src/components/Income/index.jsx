import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Income.scss';
import * as FaIcons from 'react-icons/fa';
import IncomeSummaryList from './IncomeSummaryList';
import IncomeGraph from './IncomeGraph';
import axios from 'axios';

const Income = (props) => {
	const [incomeList, setIncomeList] = useState([]);
	useEffect(() => {
		axios.get(`/api/incomes`).then((res) => {
			console.log('res', res);
			setIncomeList(res.data);
		});
	}, []);
	return (
		<Container>
			<section className="header">
				<h4>
					<FaIcons.FaDonate /> INCOME{' '}
				</h4>

				<hr className="header_hr" />
			</section>
			{incomeList.length && <IncomeGraph total={0} />}
			{incomeList.length && <IncomeSummaryList incomeList={incomeList} />}
		</Container>
	);
};
export default Income;
