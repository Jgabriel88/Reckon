import {Badge} from "react-bootstrap";
import "./TopNav.scss";
const TopNav = () => {

	let day = new Date().toLocaleDateString('en-US',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

	return (
		<div className="top_nav_menu">
			<ul className="top_nav_item">
					<li>{day}</li>
					<li><img
							className="top_nav_item-notification"
							src="images/icons/notification.png"
							alt="notification"/><Badge variant="light">new</Badge></li>
					<li className="top_nav_item_profile"> Omar
						<img
							className="top_nav_item-image"
							src="images/profile.png"
							alt="profile_photo"/>
					</li>
				</ul>
  </div>
)};

export default TopNav;
