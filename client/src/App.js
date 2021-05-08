import AccountsPanelList from './components/AccountsPanelList';
import BillPanelList from './components/BillPanelList';
import MontlyTarget from './components/MontlyTarget';
import SideNavList from './components/SideNavList';
import TopNav from './components/TopNav';
import GraphList from './components/GraphList';
import "./App.scss"
import {Container, Row, Col} from "react-bootstrap";



function App() {
  
	return (
    <main className="layout">
      <section className="sidebar">
        <nav className="sidebar__menu">
					<SideNavList />
        </nav>
      </section>
			
      <section className="content">
        <section className="top_nav">
          <TopNav />
        </section>
        <Container>
          <Row>
            <Col><GraphList /></Col>  
          </Row>
          <Row>
            <Col><BillPanelList /></Col>
          </Row>
          <Row>
            <Col><MontlyTarget /></Col>
            <Col><AccountsPanelList /></Col>
          </Row>
        </Container>
      </section>
    </main>
  )};

export default App;
