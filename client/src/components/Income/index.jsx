import React from 'react';
import { Container } from 'react-bootstrap';
import './Income.scss';
import * as FaIcons from 'react-icons/fa';
import IncomeSummaryList from './IncomeSummaryList';
import IncomeGraph from './IncomeGraph';

const Income = (props) => {
	return (
		<Container>
			<section className="header">
				<h4>
					<FaIcons.FaDonate /> INCOME{' '}
				</h4>

				<hr />
			</section>
			{props.incomeList.length && (
				<IncomeGraph total={props.incomeList[0].sum} />
			)}
			{props.incomeList.length && (
				<IncomeSummaryList incomeList={props.incomeList} />
			)}
		</Container>
	);
};
export default Income;
