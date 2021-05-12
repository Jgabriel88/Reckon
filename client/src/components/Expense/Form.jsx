import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Form.scss';
import axios from 'axios';

const AddExpense = (props) => {
	const [enteredDate, setEnteredDate] = useState('');
	const [selectedAccount, setSelectedAccount] = useState('');
	const [enteredPayee, setEnteredPayee] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredNotes, setEnteredNotes] = useState('');

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
	const submitForm = (event) => {
		event.preventDefault();
		const newData = {
			date: enteredDate,
			amount: enteredAmount,
			notes: enteredNotes,
			account: selectedAccount,
			payee: enteredPayee,
		};
		return axios.post(`/api/expenses/`, { newData }).then((res) => {
			setEnteredDate('');
			setEnteredPayee('');
			setEnteredNotes('');
			setEnteredAmount('');
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
					<Form.Control as="select" onChange={accountChangeHandler}>
						<option value="">Select an Account</option>
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
					/>
				</Form.Group>
				<Form.Group className="form_input">
					<Form.Label>Category</Form.Label>
					<Form.Control as="select" name="category">
						<option>put the category here1</option>
						<option>put the category here2</option>
						<option>put the category here3</option>
					</Form.Control>
				</Form.Group>
				<Form.Group className="form_input">
					<Form.Label>Sub Category</Form.Label>
					<Form.Control as="select" name="subcategory">
						<option>put the subcategory here1</option>
						<option>put the subcategory here2</option>
						<option>put the subcategory here3</option>
					</Form.Control>
				</Form.Group>
				<Form.Group className="form_input">
					<Form.Label>Amount</Form.Label>
					<Form.Control
						type="text"
						placeholder="Amount"
						name="amount"
						onChange={amountChangeHandler}
					/>
				</Form.Group>
				<Form.Group className="form_input">
					<Form.Label>Notes</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						name="notes"
						onChange={notesChangeHandler}
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
