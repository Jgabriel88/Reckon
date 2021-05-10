import React, { useEffect, useState } from 'react';
import AccountsPanelList from './components/AccountsPanelList';
import BillPanelList from './components/BillPanelList';
import MontlyTarget from './components/MontlyTarget';
import SideNavList from './components/SideNavList';
import TopNav from './components/TopNav';
import GraphList from './components/GraphList';
import './App.scss';
import axios from 'axios';
import {Container, Row, Col} from "react-bootstrap";
import * as FaIcons from "react-icons/fa"

function App() {
	useEffect(() => {
		axios.get(`http://localhost:3000/api/accounts`).then((res) => {
			console.log('WE ARE PRINTING HERE ---------->', res);
    });
  });
  const [sideBar, setSideBar] = useState(true);
	const showSidebar = () => setSideBar(!sideBar)	

	return (
		<main className="layout">
      <section className="navbar">
        <div className="navbar_menu_bars">
          <FaIcons.FaBars onClick={showSidebar}/>
        </div>
        <div className="navbar_top_nav">
          <TopNav />
        </div>
      </section>
      <section className="page">
        <div className={sideBar ? "page_sidebar active" : "page_sidebar"}>
          <SideNavList showSidebar={sideBar}/>
        </div>
        <div className="page_content">
          <Container>
            <Row>
              <Col><GraphList /></Col>  
            </Row>
            <Row>
              <Col><BillPanelList /></Col>
            </Row>
            <Row className="page_content_target_accounts">
              <Col xs={12} md={4}><MontlyTarget /></Col>
              <Col xs={12} md={8}><AccountsPanelList /></Col>
            </Row>
          </Container>
        </div>
      </section>
    </main>
	);
}

export default App;
