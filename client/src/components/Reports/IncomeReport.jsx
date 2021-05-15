import { Row, Col } from 'react-bootstrap';
import './IncomeReport.scss';
// import * as FaIcons from 'react-icons/fa';

import { useState, useEffect } from 'react';
import axios from 'axios';
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import { PdfDocument } from './CreatePdfDocument';

function formatNumber(number) {
  let newNumber = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100)
  return newNumber;
}

const IncomeReport = (props) => {

  let [state, setState] = useState({
    grossSales: [{grosssales: 0}],
    cogs: [{cogs: 0}],
    oExpenses: [{ operatingexpenses: 0}],
    aExpenses: [{ adminexpenses: 0}]
  });

  useEffect(() => {
    const promiseGrossSales   = axios.get(`/api/reports/incomes/grosssales/${props.startDate}/${props.endDate}`);
    const promiseCogs         = axios.get(`/api/reports/incomes/cogs/${props.startDate}/${props.endDate}`);
    const promiseOExpenses    = axios.get(`/api/reports/incomes/operatingexpenses/${props.startDate}/${props.endDate}`);
    const promiseAExpenses    = axios.get(`/api/reports/incomes/adminexpenses/${props.startDate}/${props.endDate}`);
    const promises = [
      promiseGrossSales,
      promiseCogs,
      promiseOExpenses,
      promiseAExpenses
    ];
    Promise.all(promises).then((all) => {

      setState((prev) => ({
        ...prev,
        grossSales: all[0].data,
        cogs: all[1].data,
        oExpenses: all[2].data,
        aExpenses: all[3].data
      }));
    });
  }, [props.startDate,props.endDate]);

  {console.log("gross sales from promises : ", state.grossSales[0].grosssales)}
  {console.log("cogs from promises : ", state.cogs[0].cogs)}

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
          <Col>{state.grossSales[0].grosssales && state.cogs[0].cogs && new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format((parseInt(state.grossSales[0].grosssales) - parseInt(state.cogs[0].cogs)) / 100)}</Col>
        </Row>
        <Row>
          <p></p>
        </Row>
        <Row>
          <Col>EXPENSES</Col>
        </Row>
        <Row>
          <Col>Operating Expense</Col>
          <Col>{state.oExpenses[0].operatingexpenses && formatNumber(state.oExpenses[0].operatingexpenses)}</Col>
        </Row>
        <Row>
          <Col>Administrative Expense</Col>
          <Col>{state.aExpenses[0].adminexpenses && formatNumber(state.aExpenses[0].adminexpenses)}</Col>
        </Row>
        <Row>
          <Col>Total Operating Expense</Col>
           <Col>{
           state.oExpenses[0].operatingexpenses && 
           state.aExpenses[0].adminexpenses && 
           formatNumber(parseInt(state.oExpenses[0].operatingexpenses) + parseInt(state.aExpenses[0].adminexpenses))
           }
          </Col>
        </Row>
        <Row>
          <p></p>
        </Row>
        <Row>
          <Col>Total Income (before tax)</Col>
          <Col>{
            state.grossSales[0].grosssales &&
            state.cogs[0].cogs &&
            state.aExpenses[0].adminexpenses &&
            state.oExpenses[0].operatingexpenses &&
            formatNumber((parseInt(state.grossSales[0].grosssales) - parseInt(state.cogs[0].cogs) - (parseInt(state.aExpenses[0].adminexpenses) + parseInt(state.oExpenses[0].operatingexpenses))))
          }</Col>
        </Row>
        <Row>
          <Col>Income Tax</Col>
            <Col>{
            state.grossSales[0].grosssales &&
            state.cogs[0].cogs &&
            state.aExpenses[0].adminexpenses &&
            state.oExpenses[0].operatingexpenses &&
            formatNumber((parseInt(state.grossSales[0].grosssales) - parseInt(state.cogs[0].cogs) - (parseInt(state.aExpenses[0].adminexpenses) + parseInt(state.oExpenses[0].operatingexpenses)))*.30)
          }</Col>
        </Row>
        <Row>
          <p></p>
        </Row>
        <Row>
          <Col>NET INCOME</Col>
          <Col>{

            state.grossSales[0].grosssales &&
            state.cogs[0].cogs &&
            state.aExpenses[0].adminexpenses &&
            state.oExpenses[0].operatingexpenses &&
            formatNumber
            (
              (parseInt(state.grossSales[0].grosssales) - parseInt(state.cogs[0].cogs) - (parseInt(state.aExpenses[0].adminexpenses) + parseInt(state.oExpenses[0].operatingexpenses)))-
              ((parseInt(state.grossSales[0].grosssales) - parseInt(state.cogs[0].cogs) - (parseInt(state.aExpenses[0].adminexpenses) + parseInt(state.oExpenses[0].operatingexpenses)))*.30)
            )
        }</Col>
        </Row>
      </div>
    </div>
  )
}
export default IncomeReport;