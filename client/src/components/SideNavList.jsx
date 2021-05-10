import React from "react";
import SideNavItem from './SideNavItem';
import "./SideNavList.scss";

const SideNavList = (props) => {
	const showSideBar = props.showSideBar
	return (
		<div className= {showSideBar ? "side_nav active" : "side_nav"}>
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
