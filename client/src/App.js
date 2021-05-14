import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Dashboard from './components/Dashboard/index';
import BillForm from './components/Bills/Form';
import BillPay from './components/Bills/PayBill';
import Income from './components/Income/index';
import IncomeForm from './components/Income/Form';
import EditForm from './components/Income/EditForm';
import Expenses from './components/Expense/index';
import ExpenseForm from './components/Expense/Form';
import Accounts from './components/Accounts/index';
import AccountForm from './components/Accounts/Form';
import Reports from './components/Reports/index';
import TopNav from './components/TopNav';
import Login from './components/users/login';
import Register from './components/users/register';
import './App.scss';
import axios from 'axios';

import * as FaIcons from 'react-icons/fa';

function App() {
	let [state, setState] = useState({
		accounts: [],
		monthlyIncome: [],
		monthlyExpense: [],
		monthlyBalance: [],
	});
	React.useEffect(() => {
		const baseUrl = '/api';
		const promiseExpense = axios.get(`${baseUrl}/expenses`);
		const promiseIncome = axios.get(`${baseUrl}/incomes`);
		const promiseAccount = axios.get(`${baseUrl}/accounts`);
		// const promiseBill = axios.get(`${baseUrl}/bills`);
		// const promiseTotalBill = axios.get(`${baseUrl}/bills/total`);
		const promiseMonthlyIncome = axios.get(`${baseUrl}/incomes/monthly`);
		const promiseMonthlyExpense = axios.get(`${baseUrl}/expenses/monthly`);
		const promiseMonthlBalance = axios.get(`${baseUrl}/balances/monthly`);
		const promises = [
			promiseExpense,
			promiseIncome,
			promiseAccount,
			// promiseBill,
			// promiseTotalBill,
			promiseMonthlyIncome,
			promiseMonthlyExpense,
			promiseMonthlBalance,
		];
		Promise.all(promises).then((all) => {
			setState((prev) => ({
				...prev,
				expenses: all[0].data,
				incomes: all[1].data,
				accounts: all[2].data,
				// bills: all[1].data,
				// totalBills: all[2].data,
				monthlyIncome: all[3].data,
				monthlyExpense: all[4].data,
				monthlyBalance: all[5].data,
			}));
		});
	}, []);

	const [sideBar, setSideBar] = useState(true);
	const showSidebar = () => setSideBar(!sideBar);
	const [navActive, setNavActive] = useState(false);
	const selectActive = (name) => setNavActive(name);

	const isActive = (name) => {
		if (name === navActive){
			return ("side_nav_item active");
		}
		return ("side_nav_item");
	}
	
	return (
		<main className="layout">
			<Router>
				<section className="navbar">
					<div></div>
					<div className="navbar_logo">
						<img src="/images/logo.png" className="navbar_logo_img" alt="logo" />
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
						<Link to="/" className={ isActive("dashboard") } onClick={ ()=> selectActive('dashboard')}>
							Dashboard
						</Link>
						<Link to="/income" className={ isActive("income") } onClick={()=> selectActive('income')}>
							Incomes
						</Link>
						<Link to="/expenses" className={ isActive("expenses") } onClick={()=> selectActive('expenses')}>
							Expenses
						</Link>
						<Link to="/accounts" className={ isActive("accounts") } onClick={()=> selectActive('accounts')}>
							Accounts
						</Link>
						<Link to="/reports" className={ isActive("reports") } onClick={()=> selectActive('reports')}>
							Reports
						</Link>
					</div>

					<Switch>
						<Route path="/" exact>
							<Dashboard
								// billList={state.bills}
								accountList={state.accounts}
								// totalBills={state.totalBills}
								monthlyIncomeList={state.monthlyIncome}
								monthlyExpenseList={state.monthlyExpense}
								monthlyBalanceList={state.monthlyBalance}
							/>
						</Route>
						<Route path="/bills/new">
							<BillForm />
						</Route>

						<Route path="/bills/pay/:id">
							{state.accounts.length && (
								<BillPay
									accountList={state.accounts}
									categoryList={state.expenses}
								/>
							)}
						</Route>
						<Route path="/income" exact>
							<Income />
						</Route>
						<Route path="/income/new">
							<IncomeForm accountList={state.accounts} />
						</Route>
						<Route path="/income/:id/:account_id" exact>
							<EditForm
								accountList={state.accounts}
								incomeList={state.incomes}
							/>
						</Route>
						<Route path="/expenses" exact>
							<Expenses />
						</Route>
						<Route path="/expenses/new">
							<ExpenseForm
								expenseList={state.expenses}
								accountList={state.accounts}
							/>
						</Route>
						<Route path="/accounts" exact>
							<Accounts />
						</Route>
						<Route path="/accounts/new">
							<AccountForm />
						</Route>
						<Route path="/reports">
							<Reports />
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/register">
							<Register />
						</Route>
					</Switch>
				</section>
			</Router>
		</main>
	);
}

export default App;
