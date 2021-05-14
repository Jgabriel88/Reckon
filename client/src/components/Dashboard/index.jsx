import React, { useEffect, useState } from 'react';
import GraphList from '../../components/Dashboard/GraphList';
import AccountsPanelList from '../../components/Dashboard/AccountsPanelList';
import BillPanelList from '../../components/Dashboard/BillPanelList';
import MontlyTarget from '../../components/Dashboard/MontlyTarget';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import './index.scss';

const Dashboard = (props) => {
	const [billList, setBillList] = useState([]);

	useEffect(() => {
		axios.get(`/api/bills`).then((res) => {
			setBillList(res.data);
		});
	}, []);

	const onDelete = (id) => {
		axios.post(`/api/bills/delete/${id}`).then((res) => {
			const newBillList = billList.filter((item) => item.id !== id);
			setBillList(newBillList);
		});
	};

	const totalBill = billList.reduce(function (acc, obj) {
		return acc + obj.amount_cents;
	}, 0);
	console.log('->>>>>>', props.monthlyBalanceList);
	return (
		<div className="content">
			<GraphList
				monthlyIncomeList={props.monthlyIncomeList}
				monthlyExpenseList={props.monthlyExpenseList}
				monthlyBalanceList={props.monthlyBalanceList}
			/>
			{billList.length && (
				<BillPanelList
					billList={billList}
					totalBills={totalBill}
					onDelete={onDelete}
				/>
			)}

			<div className="content_target_accounts">
				<div className="content_target">
					{props.monthlyBalanceList.length && (
						<MontlyTarget
							totalIncome={props.monthlyIncomeList[0].sum}
							totalExpense={props.monthlyExpenseList[0].sum}
						/>
					)}
				</div>
				<div className="content_accounts">
					<AccountsPanelList accountList={props.accountList} />
				</div>
			</div>
		</div>
	);
};
export default Dashboard;
