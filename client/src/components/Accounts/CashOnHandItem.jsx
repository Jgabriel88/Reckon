import {useState} from "react";
import { Link } from 'react-router-dom';
import {Table} from "react-bootstrap";
import * as FaIcons from 'react-icons/fa';
import './Accounts.scss';

const CashOnHandItem = () => {
  const [accountDetails, setAccountDetails] = useState(false);
  const showDetails = () => setAccountDetails(!accountDetails);
  
  return (
    <>
      <div className="account_summary_details">
        <div>
          <h5>Daily Sales</h5>
          <p>Cash</p>
        </div>
        <div className="align-center">
          <p>Total: $ 1,798.00</p>
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
    </>
  )
}
export default CashOnHandItem;