import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './IncomeReport.scss';
import * as FaIcons from 'react-icons/fa';

const IncomeReport = () => {
  return (
    <div className="income_report">
      <div className="income_report_header">
        <h5>BRAZILLIDINNES INC</h5>
        <h4>INCOME STATEMENT</h4>
        <p>May 1, 2021 to May 30, 2021</p>
      </div>
      <div className="income_report_content">
        <Row>
          <Col >REVENUE</Col>
        </Row>
        <Row>
          <Col >Gross Sales</Col>
          <Col>$ 150,000.00</Col>
        </Row>
        <Row>
          <Col>Cost of Goods Sold</Col>
          <Col>$ 80,000.00</Col>
        </Row>
        <Row>
          <Col>Gross Income</Col>
          <Col></Col>
          <Col>$ 70,000.00</Col>
        </Row>
        <Row>
          <p></p>
        </Row>
        <Row>
          <Col>EXPENSES</Col>
        </Row>
        <Row>
          <Col>Operating Expense</Col>
          <Col>$ 8,000.00</Col>
        </Row>
        <Row>
          <Col>Administrative Expense</Col>
          <Col>$ 12,000.00</Col>
        </Row>
        <Row>
          <Col>Total Operating Expense</Col>
          <Col></Col>
          <Col>$ 20,000.00</Col>
        </Row>
        <Row>
          <p></p>
        </Row>
        <Row>
          <Col>Total Income (before tax)</Col>
          <Col></Col>
          <Col>$ 50,000.00</Col>
        </Row>
        <Row>
          <Col>Income Tax</Col>
          <Col></Col>
          <Col>$ 7,500.00</Col>
        </Row>
        <Row>
          <p></p>
        </Row>
        <Row>
          <Col>NET INCOME</Col>
          <Col></Col>
          <Col >$ 42,500.00</Col>
        </Row>
      </div>
    </div>
  )
}
export default IncomeReport;