import { Link } from 'react-router-dom';
import BankAccountItem from './BankAccountItem'

import {Container, Table} from "react-bootstrap";
import * as FaIcons from 'react-icons/fa';
import './Accounts.scss';

const BankAccountsList = () => {
  
  return (
    <section className="account_summary_bank">
      <div className="account_summary_header">
        <h4><FaIcons.FaDonate /> Bank Accounts</h4>
        <h5>Total: $ 2,198.00</h5>
        <Link to="/accounts/new">
          <button className="account_summary_btn-Add">
            <FaIcons.FaPlus />
          </button>
        </Link>
      </div>
      
      <BankAccountItem />
      
    </section>
  )
}
export default BankAccountsList;