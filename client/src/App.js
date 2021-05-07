import './App.css';
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
		</main>
	);
}

export default App;
