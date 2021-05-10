import {Container} from "react-bootstrap";
import './Income.scss';

const Income = () => {
  return (
    <Container>
      <section>
        <h4>INCOME</h4>
      </section>
      <section className="income_summary">
        <div className="income_summary_graph">
         
        </div>
        <div className="income_summary_details">

        </div>
      </section>
    </Container>
  )
}
export default Income;