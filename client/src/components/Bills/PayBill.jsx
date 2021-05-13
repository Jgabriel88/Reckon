import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Form.scss';

const AddBill = (props) => {
	
	
	return (
		<Container className="form_container">
			<h5>PAY BILL</h5>
			<hr />
			<Form >
				<Form.Group className="form_input">
					<Form.Label>Date</Form.Label>
					<Form.Control type="date" name="date" />
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
					<Form.Label>Amount</Form.Label>
					<Form.Control
						type="text"
						placeholder="0.00"
						name="amount"
					/>
				</Form.Group>
        <Form.Group className="form_input">
					<Form.Label>Select Account</Form.Label>
					<Form.Control
						as="select" name="account">
						<option value="">---Assign an Account---</option>
					</Form.Control>
          <Form.Group className="form_input">
					  <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              name="category">
              <option value="">---Assign a Category---</option>
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
