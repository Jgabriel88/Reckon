import SideNavItem from './SideNavItem';
import "./SideNavList.scss";

const SideNavList = () => {
	return (
		<div className="side_nav">
			
			<section>
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
