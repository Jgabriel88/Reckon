import * as FaIcons from 'react-icons/fa';
import { Container, Form, Button } from 'react-bootstrap';
import './Form.scss';

const AddIncome = () => {
  return (
    <Container className="form_container">
      <h5>NEW INCOME</h5>
      <hr/>
      <Form>
        <Form.Group className="form_input">
          <Form.Label>Select Account</Form.Label>
          <Form.Control as="select">
            <option>RBC Checking Account - 123456</option>
            <option>TD Checking Account - 123456</option>
            <option>Cash On Hand</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="form_input">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter description" name="description" />
        </Form.Group>
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
export default AddIncome;