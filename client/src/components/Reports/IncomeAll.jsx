import { Container, Table } from 'react-bootstrap';
import './IncomeReport.scss';
import * as FaIcons from 'react-icons/fa';

const IncomeAll = () => {
  return (
    <div className="income_report">
      <div className="income_report_header">
        <h5>BRAZILLIDINNES INC</h5>
        <h4>INCOME REPORT</h4>
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
          <td>Daily Sales</td>
          <td>$ 500.00</td>
        </tr>
				</tbody>
			</Table>
        </Table>
      </div>
    </div>
  )
}
export default IncomeAll;