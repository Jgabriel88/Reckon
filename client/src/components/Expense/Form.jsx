import * as FaIcons from 'react-icons/fa';
import { Container, Form, Button } from 'react-bootstrap';
import './Form.scss';

const AddExpense = () => {
  return (
    <Container className="form_container">
      <h5>NEW EXPENSE</h5>
      <hr/>
      <Form>
        <div className="form_input">
          <>
            <Form.Group className="form_input_date">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="date" />
            </Form.Group>
            <Form.Group className="form_input_account">
              <Form.Label>Select Account</Form.Label>
              <Form.Control as="select" name="account">
                <option>RBC Checking Account - 123456</option>
                <option>TD Checking Account - 123456</option>
                <option>Cash On Hand</option>
              </Form.Control>
            </Form.Group>
          </>
        </div>
        <>
          <Form.Group className="form_input_payee">
            <Form.Label>Payee</Form.Label>
            <Form.Control type="text" placeholder="Enter Payee" name="payee" />
          </Form.Group>
        </>
        <>
          <Form.Group className="form_input_category">
            <Form.Label>Category</Form.Label>
            <Form.Control as="select" name="category">
              <option>House / Rent</option>
              <option>Food</option>
              <option>Transportation</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="form_input_subcategory">
            <Form.Label>Sub-Category</Form.Label>
            <Form.Control as="select" name="sub-category">
              <option>Rent</option>
              <option>Restaurant</option>
              <option>Car Loan</option>
            </Form.Control>
          </Form.Group>
        </>
        <Form.Group className="form_input">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="text" placeholder="Amount" name="amount" />
        </Form.Group>
        <Form.Group className="form_input">
          <Form.Label>Notes</Form.Label>
          <Form.Control as="textarea" rows={3} name="notes"/>
        </Form.Group>

        <Button className="btn-submit" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}
export default AddExpense;