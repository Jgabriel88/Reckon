<<<<<<< HEAD
import SideNavItem from "./SideNavItem";
import "./SideNavList.css";

const SideNavList = () => {
  return (
    <div className="sidenav">
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
=======
import SideNavItem from './SideNavItem';
import Logo from './Logo';
import "./SideNavList.scss";

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
>>>>>>> master
};

export default SideNavList;
