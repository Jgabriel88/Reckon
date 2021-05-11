import React from 'react';
import {Container, Table} from "react-bootstrap";
import './Expenses.scss';
import * as FaIcons from 'react-icons/fa';

const Expense = () => {
  return (
    <Container>
      <section className="header">
        <h4><FaIcons.FaChartLine /> EXPENSES </h4>

        <hr />
      </section>
      <section className="expenses_summary">
        <div className="expenses_summary_graph">
          <p>This graph</p>
        </div>
        <div className="expenses_summary_details">
          <h5>Total Expenses:</h5>
          <h1>$ 210.00</h1>
        </div>
      </section>
      <section className="expenses_list">
        <div className="expenses_list_header">
          <h5>EXPENSES SUMMARY</h5>
          <button className="expenses_list_header_btn-Add">New <FaIcons.FaPlus /></button>
        </div>
        <Table responsive="sm" striped hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Payee</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Action</th>
              <th>Notes</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>06/22/2021</td>
              <td>Bell Canada ***03200</td>
              <td>Telephone</td>
              <td>$ 210.00</td>
              <td>With overdue from the previous month</td>
              <td><FaIcons.FaEdit className="expenses_list_edit"/> | <FaIcons.FaTrashAlt className="expenses_list_delete"/></td>
              
            </tr>
            <tr>
              <th colSpan="4">TOTAL</th>
              <th colSpan="3">$210.00</th>
            </tr>
          </tbody>
        </Table>
      </section>
    </Container>
  )
}
export default Expense;