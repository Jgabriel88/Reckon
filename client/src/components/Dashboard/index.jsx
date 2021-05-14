import React, { useEffect, useState } from 'react';
import axios from 'axios';

import GraphList from '../../components/Dashboard/GraphList';
import AccountsPanelList from '../../components/Dashboard/AccountsPanelList';
import BillPanelList from '../../components/Dashboard/BillPanelList';
import MontlyTarget from '../../components/Dashboard/MontlyTarget';

import * as FaIcons from 'react-icons/fa';
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

	return (
		<div className="content">
			<div className="content_dashboard_header">
				<h4>
					<FaIcons.FaBraille /> Dashboard
				</h4>
			</div>
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
					<MontlyTarget />
				</div>
				<div className="content_accounts">
					<AccountsPanelList accountList={props.accountList} />
				</div>
			</div>
		</div>
	);
};
export default Dashboard;
