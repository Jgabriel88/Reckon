import BankAccountsList from './BankAccountList';
import CreditCardList from './CreditCardList';
import CashOnHandList from './CashOnHandList';

import {Container} from "react-bootstrap";
import './Accounts.scss';

const Accounts = () => {
  
  return (
    <Container className="account_summary">
      <BankAccountsList />
      <CreditCardList />
      <CashOnHandList />

    </Container>
  )
}
export default Accounts;