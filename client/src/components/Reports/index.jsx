import IncomeReport from './IncomeReport';

import { Container, Form, Button } from 'react-bootstrap';
import './Reports.scss';
import * as FaIcons from 'react-icons/fa';

const Reports = () => {
  return (
    <div className="report_container">
			<div className="reports_header">
				<h4>
					<FaIcons.FaRegFilePdf /> REPORTS
				</h4>
          <div>
            <Form.Group className="form_input">
              <Form.Label>Select Account</Form.Label>
              <Form.Control as="select" size="sm">
                <option value="">Select Report Type</option>
                <option value="">All Income</option>
                <option value="">All Expenses</option>
                <option value="">Income Report</option> 
              </Form.Control >
            </Form.Group>
          </div>
          <div className="reports_header_date">
            <Form.Group className="form_input">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                name="start_date"
                size="sm"
              />
            </Form.Group>
            <Form.Group className="form_input">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                name="start_date"
                size="sm"
              />
            </Form.Group>
          </div>
          <div>
            <Button className="btn-submit" type="submit" name="generate">
              Generate
            </Button>
          </div>
			</div>
      <div className="report_page">
        <IncomeReport />
      </div>
      <div className="report_print">
        <Button className="btn-submit" type="submit" name="print">
          <FaIcons.FaPrint /> Print 
        </Button>
      </div>

		</div>
  )
}
export default Reports;