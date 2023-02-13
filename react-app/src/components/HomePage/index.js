import Discover from "../Discover";
import "./HomePage.css";

function HomePage() {
	return (
		<>
			<nav>
				<li>Discover (NAVIGATION)</li>
				<li>Likes</li>
				<li>Questions</li>
				<button>My Profile</button>
			</nav>
			<Discover />
		</>
	);
}

export default HomePage;
