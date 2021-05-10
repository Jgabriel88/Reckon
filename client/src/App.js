import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Dashboard from './components/Dashboard/index';
import Income from './components/Income/index';
import Expenses from './components/Expense/index';
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
	});
	React.useEffect(() => {
		const baseUrl = '/api';
		const promiseExpense = axios.get(`${baseUrl}/expenses`);
		const promiseIncome = axios.get(`${baseUrl}/incomes`);
		const promiseAccount = axios.get(`${baseUrl}/accounts`);
		const promiseBill = axios.get(`${baseUrl}/bills`);
		const promises = [
			promiseExpense,
			promiseIncome,
			promiseAccount,
			promiseBill,
		];
		Promise.all(promises).then((all) => {
			setState((prev) => ({
				...prev,
				expenses: all[0].data,
				incomes: all[1].data,
				accounts: all[2].data,
				bills: all[3].data,
			}));
		});
	}, []);

	const [sideBar, setSideBar] = useState(true);
	const showSidebar = () => setSideBar(!sideBar);

	return (
		<main className="layout">
			<Router>
				<section className="navbar">
					<div className="navbar_menu_bars">
						<FaIcons.FaBars onClick={showSidebar} />
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
							<Dashboard billList={state.bills} accountList={state.accounts} />
						</Route>
						<Route path="/income">
							<Income />
						</Route>
						<Route path="/expenses">
							<Expenses />
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
