import Discover from "../Discover";
import "./HomePage.css";
import { NavLink } from "react-router-dom";

function HomePage() {
	return (
		<>
			<nav>
				<li>Discover (NAVIGATION)</li>
				<li>Likes</li>
				<li>Questions</li>
				<NavLink exact to="/profile/current_user">
					<button>My Profile</button>
				</NavLink>
			</nav>
			<Discover />
		</>
	);
}

export default HomePage;
