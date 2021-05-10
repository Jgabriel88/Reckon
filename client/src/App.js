import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dashboard from './components/Dashboard/index';
import Income from './components/Income/Index';
import Expenses from './components/Expense/index';
import Accounts from './components/Accounts/index';
import Budgets from './components/Budgets/index';
import Reports from './components/Reports/index';
import TopNav from './components/TopNav';
import './App.scss';
import axios from 'axios';


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
      <Router>
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
            <Link to="/" className="side_nav_item">Dashboard</Link>
            <Link to="/income" className="side_nav_item">Income</Link>
            <Link to="/expenses" className="side_nav_item">Expenses</Link>
            <Link to="/accounts" className="side_nav_item">Accounts</Link>
            <Link to="/budgets" className="side_nav_item">Budgets</Link>
            <Link to="/reports" className="side_nav_item">Reports</Link>
          </div>
          
          <Switch>
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/income" >
              <Income />
            </Route>
            <Route path="/income/new" >
              
            </Route>
            <Route path="/expenses" >
              <Expenses />
            </Route>
            <Route path="/accounts" >
              <Accounts />
            </Route>
            <Route path="/budgets" >
              <Budgets />
            </Route>
            <Route path="/reports" >
              <Reports />
            </Route>
          </Switch>
         
        </section>
        
      </Router>
      
      
    </main>
	);
}

export default App;
