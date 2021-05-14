import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Form.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AddBill = (props) => {
	let { id } = useParams();
	const [enteredDate, setEnteredDate] = useState('');
	const [selectedAccount, setSelectedAccount] = useState('');
	const [enteredPayee, setEnteredPayee] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('');

	let categories = [];
	let categoryFilter = props.categoryList.map((expense) => {
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

	const categoryChangeHandler = (event) => {
		setSelectedCategory(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const newData = {
			date: enteredDate,
			amount: enteredAmount,
			account: selectedAccount,
			payee: enteredPayee,
			category: selectedCategory,
		};
		return axios.post(`/api/bills/edit/${id}`, { newData }).then((res) => {});
	};

	return (
		<Container className="form_container">
			<h5>PAY BILL</h5>
			<hr />
			<Form onSubmit={submitHandler}>
				<Form.Group className="form_input" onChange={dateChangeHandler}>
					<Form.Label>Date</Form.Label>
					<Form.Control type="date" name="date" />
				</Form.Group>
				<Form.Group className="form_input" onChange={payeeChangeHandler}>
					<Form.Label>Payee</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Payee Name"
						name="payee"
					/>
				</Form.Group>
				<Form.Group className="form_input">
					<Form.Label>Amount</Form.Label>
					<Form.Control
						type="text"
						placeholder="0.00"
						name="amount"
						onChange={amountChangeHandler}
					/>
				</Form.Group>
				<Form.Group className="form_input">
					<Form.Label>Select Account</Form.Label>
					<Form.Control
						as="select"
						name="account"
						onChange={accountChangeHandler}>
						<option value="">---Assign an Account---</option>
						{accounts}
					</Form.Control>
					<Form.Group className="form_input">
						<Form.Label>Category</Form.Label>
						<Form.Control
							as="select"
							name="category"
							onChange={categoryChangeHandler}>
							<option value="">---Assign a Category---</option>
							{category}
						</Form.Control>
					</Form.Group>
				</Form.Group>
				<Button className="btn-submit" type="submit">
					Submit
				</Button>
			</Form>
		</Container>
	);
};
export default AddBill;
