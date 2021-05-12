import { Link } from 'react-router-dom';
import {Container} from "react-bootstrap";
import * as FaIcons from 'react-icons/fa';
import './Accounts.scss';

const Accounts = () => {
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
          <h5>RBC No Limit Banking</h5>
          <p>Checking 06301-123455</p>
        </div>
        <div className="account_summary_details">
          <h5>RBC High Interest</h5>
          <p>Savings 06322-123455</p>
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
          <h5>RBC Rewards</h5>
          <p>No Limit 06301-123455</p> 
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
          <h5>Stocks</h5>
          <p>06301-123455</p> 
        </div>
        <div className="account_summary_details">
          <h5>Doge Coins</h5>
          <p>06301-123455</p> 
        </div>
			</section>
    </Container>
  )
}
export default Accounts;