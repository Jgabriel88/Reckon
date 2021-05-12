import {useState} from "react";
import { Link } from 'react-router-dom';
import {Container, Table} from "react-bootstrap";
import * as FaIcons from 'react-icons/fa';
import './Accounts.scss';

const Accounts = () => {
  const [accountDetails, setAccountDetails] = useState(false);
  const showDetails = () => setAccountDetails(!accountDetails);
  
  return (
    <Container className="account_summary">
      <section className="account_summary_bank">
        <div className="account_summary_header">
          <h4><FaIcons.FaDonate /> Bank Accounts</h4>
          <h5>Total: $ 2,198.00</h5>
          <Link to="/expenses/new">
            <button className="account_summary_btn-Add">
              <FaIcons.FaPlus />
            </button>
				  </Link>
        </div>
        <div className="account_summary_details">
          <div>
            <h5>RBC No Limit Banking</h5>
            <p>Checking 06301-123455</p>
          </div>
          <div className="align-center">
            <p>Total: $ 1,000.00</p>
          </div>
          <div>
            <button class="account_summary_details_btn_show" onClick={showDetails}><FaIcons.FaEllipsisV /></button>
          </div>
        </div>
        <div className={accountDetails ? 'account_summary_details_show active' : 'account_summary_details_show'}>
          <Table striped hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Activity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>02/28/2021</td>
                <td>Deposit</td>
                <td>$ 500.00</td>
              </tr>
              <tr>
                <td>1</td>
                <td>02/28/2021</td>
                <td>Deposit</td>
                <td>$ 500.00</td>
              </tr>
              <tr>
                <td>1</td>
                <td>02/28/2021</td>
                <td>Withdrawal</td>
                <td>$ 500.00</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="account_summary_details">
          <div>
            <h5>RBC High Interest</h5>
            <p>Savings 06322-123455</p>
          </div>
          <div className="align-center">
            <p>Total: $ 1,198.00</p>
          </div>
          <div>
            <button class="account_summary_details_btn_show" onClick={showDetails}><FaIcons.FaEllipsisV /></button>
          </div>
        </div>
        <div className={accountDetails ? 'account_summary_details_show active' : 'account_summary_details_show'}>
          <Table striped hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Activity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>02/28/2021</td>
                <td>Deposit</td>
                <td>$ 500.00</td>
              </tr>
              <tr>
                <td>1</td>
                <td>02/28/2021</td>
                <td>Deposit</td>
                <td>$ 500.00</td>
              </tr>
              <tr>
                <td>1</td>
                <td>02/28/2021</td>
                <td>Withdrawal</td>
                <td>$ 500.00</td>
              </tr>
            </tbody>
          </Table>
        </div>
			</section>
      <section className="account_summary_ccard">
        <div className="account_summary_header">
          <h4><FaIcons.FaCcMastercard /> Credit Cards</h4>
          <h5>Total: $ 2,198.00</h5>
          <Link to="/expenses/new">
            <button className="account_summary_btn-Add">
             <FaIcons.FaPlus />
            </button>
				  </Link>
        </div>
        <div className="account_summary_details">
          <div>
            <h5>RBC Rewards</h5>
            <p>No Limit 06301-123455</p>
          </div>
          <div className="align-center">
            <p>Total: $ 1,798.00</p>
          </div>
          <div>
            <button class="account_summary_details_btn_show"><FaIcons.FaEllipsisV /></button>
          </div>
        </div>
			</section>

      <section className="account_summary_investments">
        <div className="account_summary_header">
          <h4><FaIcons.FaChartBar /> Investments</h4>
          <h5>Total: $ 2,198.00</h5>
          <Link to="/expenses/new">
            <button className="account_summary_btn-Add">
             <FaIcons.FaPlus />
            </button>
          </Link>
        </div>
        <div className="account_summary_details">
          <div>
            <h5>Stocks</h5>
            <p>06301-123455</p>
          </div>
          <div className="align-center">
            <p>Total: $ 1,798.00</p>
          </div>
          <div>
            <button class="account_summary_details_btn_show"><FaIcons.FaEllipsisV /></button>
          </div>
        </div>
			</section>
    </Container>
  )
}
export default Accounts;