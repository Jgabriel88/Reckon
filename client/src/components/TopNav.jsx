import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
const TopNav = () => {
	return (
		
		<Navbar className="top-nav-menu" collapseOnSelect expand="lg" variant="dark">
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
			<Nav className="justify-content-end" style={{ width: "100%" }}>
				<Nav.Link href="#">Friday | May 6 2021</Nav.Link>
				<Nav.Link href="#">
					Notif
				</Nav.Link>
				<NavDropdown title="Pic" id="collasible-nav-dropdown">
					<NavDropdown.Item href="#">Edit Profile</NavDropdown.Item>
					<NavDropdown.Item href="#">Logout</NavDropdown.Item>
				</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>

)};

export default TopNav;
