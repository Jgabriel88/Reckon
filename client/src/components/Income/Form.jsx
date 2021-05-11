import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Container, Form, Button } from 'react-bootstrap';
import './Form.scss';
import axios from 'axios';

const AddIncome = (props) => {
	const [enteredDescription, setEnteredDescription] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredNotes, setEnteredNotes] = useState('');
	const [selectedAccount, setSelectedAccount] = useState('');

	let accounts = props.accountList.map((account) => {
		return (
			<option>
				{account.id} - {account.name} - {account.type} Account- $
				{account.balance_cents}
			</option>
		);
	});

	const descriptionChangeHandler = (event) => {
		setEnteredDescription(event.target.value);
	};
	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};
	const notesChangeHandler = (event) => {
		setEnteredNotes(event.target.value);
	};
	const accountChangeHandler = (event) => {
		setSelectedAccount(event.target.value);
	};
	const submitForm = (event) => {
		event.preventDefault();
		const newData = {
			description: enteredDescription,
			amount: enteredAmount,
			notes: enteredNotes,
			account: selectedAccount,
		};
		console.log(newData);
		return axios.post(`/api/incomes/`, { newData }).then((res) => {
			setEnteredDescription('');
			setEnteredAmount('');
			setEnteredNotes('');
		});
	};

	return (
		<Container className="form_container">
			<h5>NEW INCOME</h5>
			<hr />
			<Form onSubmit={submitForm}>
				<Form.Group className="form_input">
					<Form.Label>Select Account</Form.Label>
					<Form.Control as="select" onChange={accountChangeHandler}>
						{accounts}
					</Form.Control>
				</Form.Group>
				<Form.Group className="form_input">
					<Form.Label>Description</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter description"
						name="description"
						onChange={descriptionChangeHandler}
						value={enteredDescription}
					/>
				</Form.Group>
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
export default AddIncome;
