import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Form.scss';
import axios from 'axios';

const AddExpense = (props) => {
	console.log('PROPS', props);
	const [enteredDate, setEnteredDate] = useState('');
	const [selectedAccount, setSelectedAccount] = useState('');
	const [enteredPayee, setEnteredPayee] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredNotes, setEnteredNotes] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('');
	let categories = [];
	let categoryFilter = props.expenseList.map((expense) => {
		if (!categories.includes(expense.category)) {
			categories.push(expense.category);
		}
	});

	let category = categories.map((category) => {
		return <option>{category}</option>;
	});

	let accounts = props.accountList.map((account) => {
		return (
			<option>
				{account.id} - {account.name} - {account.type} Account- $
				{account.balance_cents}
			</option>
		);
	});

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};
	const accountChangeHandler = (event) => {
		setSelectedAccount(event.target.value);
	};
	const payeeChangeHandler = (event) => {
		setEnteredPayee(event.target.value);
	};
	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};
	const notesChangeHandler = (event) => {
		setEnteredNotes(event.target.value);
	};
	const categoryChangeHandler = (event) => {
		setSelectedCategory(event.target.value);
	};
	const submitForm = (event) => {
		event.preventDefault();
		const newData = {
			date: enteredDate,
			amount: enteredAmount,
			notes: enteredNotes,
			account: selectedAccount,
			payee: enteredPayee,
			category: selectedCategory,
		};

		console.log('NEW DATA', newData);
		return axios.post(`/api/expenses/`, { newData }).then((res) => {
			setEnteredDate('');
			setEnteredPayee('');
			setEnteredNotes('');
			setEnteredAmount('');
			setSelectedCategory('---Select a Category---');
			setSelectedAccount('---Select an Account---');
		});
	};
	return (
		<Container className="form_container">
			<h5>NEW EXPENSE</h5>
			<hr />
			<Form onSubmit={submitForm}>
				<Form.Group className="form_input">
					<Form.Label>Date</Form.Label>
					<Form.Control type="date" name="date" onChange={dateChangeHandler} />
				</Form.Group>
				<Form.Group className="form_input">
					<Form.Label>Select Account</Form.Label>
					<Form.Control
						as="select"
						value={selectedAccount}
						onChange={accountChangeHandler}>
						<option value="">---Select an Account---</option>
						{accounts}
					</Form.Control>
				</Form.Group>
				<Form.Group className="form_input">
					<Form.Label>Payee</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Payee Name"
						name="payee"
						onChange={payeeChangeHandler}
						value={enteredPayee}
					/>
				</Form.Group>
				<Form.Group className="form_input">
					<Form.Label>Category</Form.Label>
					<Form.Control
						as="select"
						name="category"
						onChange={categoryChangeHandler}
						value={selectedCategory}>
						<option value="">---Select a Category---</option>
						{category}
					</Form.Control>
				</Form.Group>
				{/* <Form.Group className="form_input">
					<Form.Label>Sub Category</Form.Label>
					<Form.Control as="select" name="subcategory">
						<option value="">Select Sub-Category</option>
					</Form.Control>
				</Form.Group> */}
				<Form.Group className="form_input">
					<Form.Label>Amount</Form.Label>
					<Form.Control
						type="text"
						placeholder="Amount"
						name="amount"
						onChange={amountChangeHandler}
						value={enteredAmount}
					/>
				</Form.Group>
				<Form.Group className="form_input">
					<Form.Label>Notes</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						name="notes"
						onChange={notesChangeHandler}
						value={enteredNotes}
					/>
				</Form.Group>

				<Button className="btn-submit" type="submit">
					Submit
				</Button>
			</Form>
		</Container>
	);
};
export default AddExpense;
