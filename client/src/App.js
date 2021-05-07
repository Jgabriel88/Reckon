import './App.css';
import AccountsPanelList from './components/AccountsPanelList';
import BillPanelList from './components/BillPanelList';
import SideNavList from './components/SideNavList';
import TopNav from './components/TopNav';

function App() {
	return (
		<main className="layout">
			<TopNav />
			<section className="sidebar">
				<hr className="sidebar__separator sidebar--centered" />
				<nav className="sidebar__menu">
					<SideNavList />
				</nav>
			</section>
			<section>
				<BillPanelList />
			</section>
			<section>
				<AccountsPanelList />
			</section>
		</main>
	);
}

export default App;
