import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Table} from "react-bootstrap";
import './Income.scss';
import * as FaIcons from 'react-icons/fa';

const Income = () => {
  return (
    <Container>
      <section className="header">
        <h4><FaIcons.FaDonate /> INCOME </h4>

        <hr />
      </section>
      <section className="income_summary">
        <div className="income_summary_graph">
          <p>This graph</p>
        </div>
        <div className="income_summary_details">
          <h5>Total Income</h5>
          <h1>$ 2,780.00</h1>
        </div>
      </section>
      <section className="income_list">
        <div className="income_list_header">
          <h5>INCOME SUMMARY</h5>
            <Link to="/income/new">
              <button type="submit" className="income_list_header_btn-Add">New <FaIcons.FaPlus /></button>
            </Link>
        </div>
        <Table responsive="sm" striped hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Description</th>
              <th>Notes</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>06/22/2021</td>
              <td>Daily Sales</td>
              <td>$ 2,350.00</td>
              <td><FaIcons.FaEdit className="income_list_edit" /> | <FaIcons.FaTrashAlt className="income_list_delete"/></td>
              
            </tr>
            <tr>
              <th colSpan="3">TOTAL</th>
              <th colSpan="2">$317.7</th>
            </tr>
          </tbody>
        </Table>
      </section>
    </Container>
  )
}
export default Income;