import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import HomePage from "./components/HomePage";
import CreateProfilePage from "./components/CreateProfilePage";
import MyProfile from "./components/MyProfile";
import EditProfilePage from "./components/EditProfilePage";

function App() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	// const sessionUser = useSelector((state) => state.session.user);
	useEffect(() => {
		dispatch(authenticate()).then(() => setIsLoaded(true));
	}, [dispatch]);

	return (
		<>
			<Navigation isLoaded={isLoaded} />
			{isLoaded && (
				<Switch>
					<Route path='/login'>
						<LoginFormPage />
					</Route>
					<Route path='/signup'>
						<SignupFormPage />
					</Route>
					<Route path='/discover'>
						<HomePage />
					</Route>
					<Route path='/profile/create'>
						<CreateProfilePage />
					</Route>
					<Route path='/profile/current_user'>
						<MyProfile />
					</Route>
					<Route path='/profile/edit'>
						<EditProfilePage />
					</Route>
					<Route path='/'>
						<SplashPage />
					</Route>
				</Switch>
			)}
		</>
	);
}

export default App;
