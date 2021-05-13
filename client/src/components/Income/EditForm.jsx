import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Container, Form, Button } from 'react-bootstrap';
import './Form.scss';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddIncome = (props) => {
	let history = useHistory();
	const grabId = function () {
		let path = window.location.pathname.split('/')[2];
		return path;
	};
	let id = grabId();
	let income = props.incomeList.filter((inc) => inc.id == id);

	const grabAccountId = function () {
		let path = window.location.pathname.split('/')[3];
		return path;
	};
	let accountId = grabAccountId();
	let accountOption;

	let accounts = props.accountList.map((account) => {
		if (account.id == accountId) {
			accountOption = `<option>
                ${account.id} - ${account.name} - ${account.type} Account- $
                ${account.balance_cents}
            </option>`;
		}
		return (
			<option>
				{account.id} - {account.name} - {account.type} Account- $
				{account.balance_cents}
			</option>
		);
	});

	const [enteredDescription, setEnteredDescription] = useState(
		income[0].description || ''
	);
	const [enteredAmount, setEnteredAmount] = useState(
		income[0].amount_cents || ''
	);
	const [enteredNotes, setEnteredNotes] = useState(income[0].notes || '');
	const [selectedAccount, setSelectedAccount] = useState(accountOption || '');

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

		return axios.post(`/api/incomes/edit/${id}`, { newData }).then((res) => {
			setEnteredDescription('');
			setEnteredAmount('');
			setEnteredNotes('');
			history.push('/income');
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
						<option value="">---Select an Account---</option>
						{selectedAccount}
						{accounts}
					</Form.Control>
				</Form.Group>
				<Form.Group className="form_input">
					<Form.Label>Description</Form.Label>
					<Form.Control
						type="text"
						name="description"
						onChange={descriptionChangeHandler}
						value={enteredDescription}
					/>
				</Form.Group>
				<Form.Group className="form_input">
					<Form.Label>Amount</Form.Label>
					<Form.Control
						type="text"
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
