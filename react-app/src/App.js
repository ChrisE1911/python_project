import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import LikesPage from "./components/LikesPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import QuestionsPage from "./components/QuestionsPage";
import Gallery from "./components/Gallery";
import MatchesPage from "./components/MatchesPage";
import { thunkGetMatches } from "./store/match";

function App() {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const allMatchesObj = useSelector((state) => state.matchesReducer.matches);
	const allMatches = Object.values(allMatchesObj);
	// console.log("allMatches", allMatches);
	const currUser = useSelector((state) => state.session.user);
	const [isLoaded, setIsLoaded] = useState(false);
	const [matchesLen, setMatchesLen] = useState(allMatches.length);
	// const sessionUser = useSelector((state) => state.session.user);
	useEffect(() => {
		dispatch(authenticate()).then(() => setIsLoaded(true));
	}, [dispatch]);

	return (
		<>
			<Navigation matchesLen={matchesLen} isLoaded={isLoaded} />
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
					<Route exact path='/likes-page'>
						<LikesPage setMatchesLen={setMatchesLen} />
					</Route>
					<Route exact path='/questions'>
						<QuestionsPage />
					</Route>
					<Route exact path='/pictures'>
						<Gallery />
					</Route>
					<Route exact path='/'>
						<SplashPage />
					</Route>
					<Route path='/matches'>
						<MatchesPage />
					</Route>
				</Switch>
			)}
		</>
	);
}

export default App;
