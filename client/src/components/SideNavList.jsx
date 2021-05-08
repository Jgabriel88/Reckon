import SideNavItem from './SideNavItem';
import Logo from './Logo';
import './SideNavList.scss';

const SideNavList = () => {
	return (
		<div className="side_nav">
			<section>
				<Logo />
				<SideNavItem name="Dashboard" />
				<SideNavItem name="Income" />
				<SideNavItem name="Expenses" />
				<SideNavItem name="Accounts" />
				<SideNavItem name="Budgets" />
				<SideNavItem name="Reports" />
			</section>
		</div>
	);
};

export default SideNavList;
