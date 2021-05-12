import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Dashboard from './components/Dashboard/index';
import Income from './components/Income/index';
import IncomeForm from './components/Income/Form';
import Expenses from './components/Expense/index';
import ExpenseForm from './components/Expense/Form';
import Accounts from './components/Accounts/index';
import Budgets from './components/Budgets/index';
import Reports from './components/Reports/index';
import TopNav from './components/TopNav';
import './App.scss';
import axios from 'axios';

import * as FaIcons from 'react-icons/fa';

function App() {
	let [state, setState] = useState({
		expenses: [],
		incomes: [],
		accounts: [],
		bills: [],
		totalBills: { total: 0 },
		monthlyIncome: [],
		monthlyExpense: [],
	});
	React.useEffect(() => {
		const baseUrl = '/api';
		const promiseExpense = axios.get(`${baseUrl}/expenses`);
		const promiseIncome = axios.get(`${baseUrl}/incomes`);
		const promiseAccount = axios.get(`${baseUrl}/accounts`);
		const promiseBill = axios.get(`${baseUrl}/bills`);
		const promiseTotalBill = axios.get(`${baseUrl}/bills/total`);
		const promiseMonthlyIncome = axios.get(`${baseUrl}/incomes/monthly`);
		const promiseMonthlyExpense = axios.get(`${baseUrl}/expenses/monthly`);
		const promises = [
			promiseExpense,
			promiseIncome,
			promiseAccount,
			promiseBill,
			promiseTotalBill,
			promiseMonthlyIncome,
			promiseMonthlyExpense,
		];
		Promise.all(promises).then((all) => {
			setState((prev) => ({
				...prev,
				expenses: all[0].data,
				incomes: all[1].data,
				accounts: all[2].data,
				bills: all[3].data,
				totalBills: all[4].data,
				monthlyIncome: all[5].data,
				monthlyExpense: all[6].data,
			}));
		});
	}, []);

	const [sideBar, setSideBar] = useState(true);
	const showSidebar = () => setSideBar(!sideBar);

	return (
		<main className="layout">
			<Router>
				<section className="navbar">
					<div></div>
					<div className="navbar_logo">
						<img src="images/logo.png" className="navbar_logo_img" alt="logo" />
						<FaIcons.FaBars
							onClick={showSidebar}
							className="navbar_logo_bars"
						/>
					</div>
					<div className="navbar_top_nav">
						<TopNav />
					</div>
				</section>
				<section className="page">
					<div className={sideBar ? 'page_sidebar active' : 'page_sidebar'}>
						<Link to="/" className="side_nav_item">
							Dashboard
						</Link>
						<Link to="/income" className="side_nav_item">
							Income
						</Link>
						<Link to="/expenses" className="side_nav_item">
							Expenses
						</Link>
						<Link to="/accounts" className="side_nav_item">
							Accounts
						</Link>
						<Link to="/budgets" className="side_nav_item">
							Budgets
						</Link>
						<Link to="/reports" className="side_nav_item">
							Reports
						</Link>
					</div>

					<Switch>
						<Route path="/" exact>
							<Dashboard
								billList={state.bills}
								accountList={state.accounts}
								totalBills={state.totalBills}
								monthlyIncomeList={state.monthlyIncome}
								monthlyExpenseList={state.monthlyExpense}
							/>
						</Route>
						<Route path="/income" exact>
							<Income incomeList={state.incomes} />
						</Route>
						<Route path="/income/new">
							<IncomeForm accountList={state.accounts} />
						</Route>
						<Route path="/expenses" exact>
							<Expenses expenseList={state.expenses} />
						</Route>
						<Route path="/expenses/new">
							<ExpenseForm accountList={state.accounts} />
						</Route>
						<Route path="/accounts">
							<Accounts />
						</Route>
						<Route path="/budgets">
							<Budgets />
						</Route>
						<Route path="/reports">
							<Reports />
						</Route>
					</Switch>
				</section>
			</Router>
		</main>
	);
}

export default App;
