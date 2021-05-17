import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Form.scss';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddBill = (props) => {
	const [selectedDate, setSelectedDate] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredPayee, setEnteredPayee] = useState('');

	let history = useHistory();

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};
	const dateChangeHandler = (event) => {
		setSelectedDate(event.target.value);
	};
	const payeeChangeHandler = (event) => {
		setEnteredPayee(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const newData = {
			date: selectedDate,
			amount: enteredAmount,
			payee: enteredPayee,
		};

		return axios.post(`/api/bills/`, { newData }).then((res) => {
			setEnteredAmount('');
			setEnteredPayee('');
			history.push('/');
		});
	};

	return (

		<div className="bill_container">
			<div className="bill_container_fold">
				<div className="bill_container_form">
					<h5>NEW BILL</h5>
					<Form onSubmit={submitHandler}>
						<Form.Group className="form_input">
							<Form.Label>Due Date</Form.Label>
							<Form.Control type="date" name="date" onChange={dateChangeHandler} />
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
							<Form.Label>Amount</Form.Label>
							<Form.Control
								type="text"
								placeholder="0.00"
								name="amount"
								onChange={amountChangeHandler}
								value={enteredAmount}
							/>
						</Form.Group>
						<Button className="btn-submit" type="submit">
							Submit
						</Button>
					</Form>
				</div>
			</div>
		</div>
	);
};
export default AddBill;
