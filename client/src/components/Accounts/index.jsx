import BankAccountsList from './BankAccountList';
import CreditCardList from './CreditCardList';
import CashOnHandList from './CashOnHandList';

import { Container } from 'react-bootstrap';
import './Accounts.scss';

const Accounts = (props) => {
	const checkingAccount = [];
	const creditAccount = [];
	const cashAccount = [];
	const checkingOperation = [];

	const creditIncome = [];
	const creditExpense = [];
	const cashIncome = [];
	const cashExpense = [];

	props.expenseList.map((expense) => {
		if (expense.account_id === 1) {
			checkingOperation.push(expense);
		}
		if (expense.account_id === 2) {
			creditExpense.push(expense);
		}
		if (expense.account_id === 3) {
			cashExpense.push(expense);
		}
	});

	props.incomeList.map((income) => {
		if (income.account_id === 1) {
			checkingOperation.push(income);
		}
		if (income.account_id === 2) {
			creditIncome.push(income);
		}
		if (income.account_id === 3) {
			cashIncome.push(income);
		}
	});

	props.accountList.map((account) => {
		if (account.type === 'Checking') {
			checkingAccount.push(account);
		}
		if (account.type === 'Credit Card') {
			creditAccount.push(account);
		}
		if (account.type === 'Cash') {
			cashAccount.push(account);
		}
	});

	return (
		<Container className="account_summary">
			{checkingAccount.length && (
				<BankAccountsList
					account={checkingAccount}
					operations={checkingOperation}
				/>
			)}
			{creditAccount.length && (
				<CreditCardList
					account={creditAccount}
					expense={creditExpense}
					income={creditIncome}
				/>
			)}
			{cashAccount.length && (
				<CashOnHandList
					account={cashAccount}
					expense={cashExpense}
					income={cashIncome}
				/>
			)}
		</Container>
	);
};
export default Accounts;
