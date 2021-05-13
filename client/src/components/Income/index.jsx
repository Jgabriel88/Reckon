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
			setIncomeList(res.data);
		});
	}, []);

	const onDelete = (id) => {
		axios.post(`/api/incomes/delete/${id}`).then((res) => {
			const newIncomeList = incomeList.filter((item) => item.id !== id);
			setIncomeList(newIncomeList);
		});
	};

	const totalIncome = incomeList.reduce(function (acc, obj) {
		return acc + obj.amount_cents;
	}, 0);

	return (
		<Container>
			<div className="header">
				<h4>
					<FaIcons.FaDonate /> INCOME{' '}
				</h4>
				<hr className="header_hr" />
				{incomeList.length && (
					<IncomeGraph total={totalIncome} iList={incomeList} />
				)}
			</div>

			{incomeList.length && (
				<IncomeSummaryList
					incomeList={incomeList}
					onDelete={onDelete}
					total={totalIncome}
				/>
			)}
		</Container>
	);
};
export default Income;
