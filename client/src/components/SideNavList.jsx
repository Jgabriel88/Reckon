import SideNavItem from './SideNavItem';

const SideNavList = () => {
	return (
		<nav>
			<SideNavItem name="Dashboard" />
			<SideNavItem name="Income" />
			<SideNavItem name="Expenses" />
			<SideNavItem name="Accounts" />
			<SideNavItem name="Budgets" />
			<SideNavItem name="Reports" />
		</nav>
	);
};

export default SideNavList;
