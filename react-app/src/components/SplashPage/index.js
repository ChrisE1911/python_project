import "./SplashPage.css";
import Footer from "../Footer";
import { login } from "../../store/session";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
// import { useSelector } from "react-redux";
// import HomePage from "../HomePage";
import OKC from './videos/OKC.mp4'

function SplashPage() {
	// const sessionUser = useSelector((state) => state.session.user);
	const dispatch = useDispatch();
	const history = useHistory();
	const { closeModal } = useModal();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const email = "demo@aa.io"
		const password = 'password'
		const data = await dispatch(login(email, password));
		if (data) {
			alert('Under Maintanence, check again later!')
		} else {
			history.push("/discover");
			closeModal();
		}
	};
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
					<h6 className='each-txt'>
						Click below and meet them today! <button class="dislike-button" onClick={handleSubmit}>TRIAL USER</button>
					</h6>
				</div>
			</div>
				<div className='splash-img-container'>

					<video id="myVideo"  autoPlay muted loop preload='auto'>
						<source src={OKC} type="video/mp4"/>
      		</video>

				</div>

		</div>
	);
}

export default SplashPage;
