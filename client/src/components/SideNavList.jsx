import React from "react";
import SideNavItem from './SideNavItem';
import './SideNavList.scss';

const SideNavList = (props) => {
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
