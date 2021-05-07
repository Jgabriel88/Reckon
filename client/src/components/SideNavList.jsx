import SideNavItem from './SideNavItem';
import './SideNavList.css';

const SideNavList = () => {
	return (
		<div class="sidenav">
			<nav>
				<SideNavItem name="Dashboard" />
				<SideNavItem name="Income" />
				<SideNavItem name="Expenses" />
				<SideNavItem name="Accounts" />
				<SideNavItem name="Budgets" />
				<SideNavItem name="Reports" />
			</nav>
		</div>
	);
};

export default SideNavList;
