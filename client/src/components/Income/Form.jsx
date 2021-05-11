import * as FaIcons from 'react-icons/fa';
import { Container, Form, Button } from 'react-bootstrap';
import './Form.scss';

const AddIncome = (props) => {
	let accounts = props.accountList.map((account) => {
		return (
			<option>
				{account.name} - {account.type} - ${account.balance_cents}
			</option>
		);
	});

	console.log(props);
	return (
		<Container className="form_container">
			<h5>NEW INCOME</h5>
			<hr />
			<Form>
				<Form.Group className="form_input">
					<Form.Label>Select Account</Form.Label>
					<Form.Control as="select">{accounts}</Form.Control>
				</Form.Group>
				<Form.Group className="form_input">
					<Form.Label>Description</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter description"
						name="description"
					/>
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
export default AddIncome;
