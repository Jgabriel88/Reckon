import { Container, Table } from 'react-bootstrap';
import './IncomeReport.scss';
import * as FaIcons from 'react-icons/fa';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { PdfDocument } from './CreatePdfDocument';


const ExpenseAll = () => {

  const [ expenseAll, setExpenseAll ] = useState([]);
  useEffect(() => {
		axios.get('/api/expenses/monthly/12').then((res) => {

			setExpenseAll(res.data);
		});
	}, []);
  
  {console.log("expenseAll data: ", expenseAll)}

  return (
    <div className="income_report">
      <div className="income_report_header">
        <h5>BRAZILLIPINNES INC</h5>
        <h4>EXPENSES REPORT</h4>
        <p>May 1, 2021 to May 30, 2021</p>
      </div>
      <div className="income_report_content">
        <Table>
        <Table responsive="sm" striped hover>
				<thead>
          <tr>
						<th>#</th>
						<th>Date</th>
						<th>Description</th>
						<th>Amount</th>
					</tr>
				</thead>
				<tbody>
        <tr>
          <td>1</td>
          <td>02/21/2021</td>
          <td>Bell Co</td>
          <td>$ 500.00</td>
        </tr>
				</tbody>
			</Table>
        </Table>
      </div>
    </div>
  )
}
export default ExpenseAll;