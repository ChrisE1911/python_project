import "./SplashPage.css";
import Footer from "../Footer";
// import { useSelector } from "react-redux";
// import HomePage from "../HomePage";

function SplashPage() {
	// const sessionUser = useSelector((state) => state.session.user);
	return (
		<div className="splashBody1">
			<div className='splashBody'>
				<div className='splash-txt-container'>
					<h2 id='title' className='each-txt-h2'>
						DATING FOR EVERY SINGLE PERSON
					</h2>
					<h3 className='each-txt'>
						MidCupid is the only dating app that matches you on what matters to
						you.
					</h3>
					<h5 className='each-txt'>
						You deserve to find who you’re looking for.{" "}
					</h5>
					<h6 className='each-txt'>Meet them today!</h6>
				</div>
				<div className='splash-img-container'>
					<img
						src='https://cdn.okccdn.com/media/img/every_single_person/photos/pansexual.jpg'
						alt='splash-img'
					></img>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default SplashPage;
