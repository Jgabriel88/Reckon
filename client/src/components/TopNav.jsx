import {Badge} from "react-bootstrap";
import "./TopNav.scss";
const TopNav = () => {
	
	return (
		<div className="top_nav_menu">
			<ul className="top_nav_item">
					<li>Friday | May 8, 2021</li>
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
