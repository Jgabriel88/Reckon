import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Form.scss';

const AddExpense = (props) => {

	return (
		<Container className="form_container">
			<h5>NEW EXPENSE</h5>
			<hr />
			<Form>
				<Form.Group className="form_input">
					<Form.Label>Date</Form.Label>
					<Form.Control type="date" name="date" />
				</Form.Group>
				<Form.Group className="form_input">
					<Form.Label>Select Account</Form.Label>
					<Form.Control as="select">
					<option value="">Select an Account</option>
					</Form.Control>
				</Form.Group>
				<Form.Group className="form_input">
					<Form.Label>Payee</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Payee Name"
						name="payee"
					/>
				</Form.Group>
				<Form.Group className="form_input">
					<Form.Label>Category</Form.Label>
					<Form.Control as="select" name="category">
					<option value="">Select Category</option>
					</Form.Control>
				</Form.Group>
				<Form.Group className="form_input">
					<Form.Label>Sub Category</Form.Label>
					<Form.Control as="select" name="subcategory">
						<option value="">Select Sub-Category</option>
					</Form.Control>
				</Form.Group>
				<Form.Group className="form_input">
					<Form.Label>Amount</Form.Label>
					<Form.Control type="text" placeholder="Amount" name="amount" />
				</Form.Group>
				<Form.Group className="form_input">
					<Form.Label>Notes</Form.Label>
					<Form.Control as="textarea" rows={3} name="notes" />
				</Form.Group>

				<Button className="btn-submit" type="submit">
					Submit
				</Button>
			</Form>
		</Container>
	);
};
export default AddExpense;
