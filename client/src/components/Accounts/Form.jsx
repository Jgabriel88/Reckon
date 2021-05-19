import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Form.scss';


const AddAccount = () => {
	
	return (
		<div className="account_container">
			<div className="account_container_fold">
				<div className="account_container_form">
					<h5>NEW ACCOUNT</h5>
					<Form>
						<Form.Group className="form_input">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Account Name"
								name="name"
							/>
						</Form.Group>
						<Form.Group className="form_input">
							<Form.Label>Select Account</Form.Label>
							<Form.Control
								as="select"
								value=""
								onChange="">
								<option value="">---Select Type---</option>
								<option value="">Checking Account</option>
								<option value="">Savings Account</option>
								<option value="">Credit Card</option>
								<option value="">Cash</option>
								name="type"
							</Form.Control>
						</Form.Group>
						<Form.Group className="form_input">
							<Form.Label>Begining Balance</Form.Label>
							<Form.Control
								type="text"
								placeholder="0.00"
								name="amount"
							/>
						</Form.Group>
						<Form.Group className="form_input">
							<Form.Label>Currency</Form.Label>
							<Form.Control
								type="text"
								placeholder="CAD / USD / PESO"
								name="amount"
							/>
						</Form.Group>
						<Form.Group className="form_input">
							<Form.Label>Notes</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								name="notes"
							/>
						</Form.Group>
						<Button className="btn-submit" type="submit">
							Submit
						</Button>
					</Form>
				</div>
			</div>
		</div>
	)
};
export default AddAccount;
