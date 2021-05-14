import {useState} from "react";
import IncomeReport from './IncomeReport';
import IncomeAll from './IncomeAll';
import ExpenseAll from './ExpensesAll';

import { Container, Form, Button, Row } from 'react-bootstrap';
import './Reports.scss';
import * as FaIcons from 'react-icons/fa';

import { Document, Page, View, StyleSheet, PDFViewer, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const MyDocument = () => {
  <Document>
  <Page size="A4" style={styles.page}>
    <View style={styles.section}>
      <Text>Section #1</Text>
    </View>
    <View style={styles.section}>
      <Text>Section #2</Text>
    </View>
  </Page>
</Document>
};



const Reports = () => {
  const [currentReport, setCurrentReport] = useState('');
  
  const handleSelect = (event) => {
    console.log('from drowdown',event.target.value)
    setCurrentReport(event.target.value);
  };
  
  return (
    <div className="report_container">
			<div className="reports_header">
				<h4>
					<FaIcons.FaRegFilePdf /> REPORTS
				</h4>
          <div>
            <Form.Group className="form_input">
              <Form.Label>Select Report</Form.Label>
              <Form.Control as="select" size="sm" onChange={handleSelect}>
                <option value="">Select Report Type</option>
                <option value="AllIncome" >All Income</option>
                <option value="AllExpense" >All Expenses</option>
                <option value="IncomeReport">Income Report</option> 
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
        {currentReport === "AllIncome" && 
          <IncomeAll />
        }
        {currentReport === "IncomeReport" && 
          <IncomeReport />
        }
        {currentReport === "AllExpense" && 
          <ExpenseAll />
        }
        <PDFViewer>
          <MyDocument />
        </PDFViewer>
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