import "./SplashPage.css";
import Footer from "../Footer";
// import { useSelector } from "react-redux";
// import HomePage from "../HomePage";

function SplashPage() {
	// const sessionUser = useSelector((state) => state.session.user);
	return (
		<>
			<div className='splashBody'>
				<div className='splash-txt-container'>
					<h2 id='title' className='each-txt-h2'>
						Dating for Every Single Person
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
						src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.4B9QIwfxJDzq8fKyFjhO1wHaIk%26pid%3DApi&f=1&ipt=98cd0755165dafcc6da56486bc940f1ca38e9df676eab7e44a96220e10ed3a6b&ipo=images'
						alt='splash-img'
					></img>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default SplashPage;
