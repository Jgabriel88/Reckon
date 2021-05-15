import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './IncomeReport.scss';
import * as FaIcons from 'react-icons/fa';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { PdfDocument } from './CreatePdfDocument';

function formatNumber(number) {
  let newNumber = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100)
  return newNumber;
}

function getGrossIncome(val1, val2) {
  let grossIncome = parseInt(val1) - parseInt(val2)
  return formatNumber(grossIncome);
}

const IncomeReport = (props) => {

  let [state, setState] = useState({
    grossSales: [{grosssales: 0}],
    cogs: [{cogs: 0}]
  });

  useEffect(() => {
    const promiseGrossSales   = axios.get(`/api/reports/incomes/grosssales/${props.startDate}/${props.endDate}`);
    const promiseCogs         = axios.get(`/api/reports/incomes/cogs/${props.startDate}/${props.endDate}`);
    const promiseGrossIncome  = axios.get(`/api/reports/incomes/grossincome/${}/${}`);
    const promises = [
      promiseGrossSales,
      promiseCogs
    ];
    Promise.all(promises).then((all) => {

      setState((prev) => ({
        ...prev,
        grossSales: all[0].data,
        cogs: all[1].data,
        grossIncome: 0
      }));
    });
  }, []);

  {console.log("gross sales from promises : ", state.grossSales[0].grosssales)}
  {console.log("cogs from promises : ", state.cogs[0].cogs)}

  {let grossIncome = getGrossIncome(state.grossSales[0].grosssales,state.grossSales[0].grosssales)}

  return (
    <div className="income_report">
      <div className="income_report_header">
        <h5>BRAZILLIPINNES INC</h5>
        <h4>INCOME STATEMENT</h4>
        <p>{props.startDate} to {props.endDate}</p>
      </div>
      <div className="income_report_content">
        <Row>
          <Col >REVENUE</Col>
        </Row>
        <Row>
          <Col >Gross Sales</Col>
          <Col>
            {state.grossSales[0].grosssales && new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(state.grossSales[0].grosssales / 100)}
          </Col>
        </Row>
        <Row>
          <Col>Cost of Goods Sold</Col>
          <Col>{state.cogs[0].cogs && formatNumber(state.cogs[0].cogs)}</Col>
        </Row>
        <Row>
          <Col>Gross Income</Col>
          <Col>{state.grossSales[0].grosssales && state.cogs[0].cogs && grossIncome}</Col>
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