import { thunkDeleteUserProfile, thunkEditProfile } from "../../store/profile";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { thunkCurrentUserProfile } from "../../store/profile";
import { logout } from "../../store/session";

export default function EditProfilePage() {
	const dispatch = useDispatch();
	const history = useHistory();
	const test = useSelector((state) => state.profile);
	const currentUser = useSelector((state) => state.session.user);
	// console.log("IN EDIT ", test.current_user_profile.profile.age);
	let current_user = test.current_user_profile.profile;

	// console.log("CURRENT USER!!!!!", current_user);

	const [loaded, setLoaded] = useState(false);
	const [city, setCity] = useState(current_user?.city);
	const [state, setState] = useState(current_user?.state);
	const [occupation, setOccupation] = useState(current_user?.occupation);
	const [gender, setGender] = useState(current_user?.gender);
	const [sexualOrientation, setSexualOrientation] = useState(
		current_user?.sexual_orientation
	);
	const [height, setHeight] = useState(current_user?.height);
	const [religion, setReligion] = useState(current_user?.religion);
	const [politicalAffiliation, setPoliticalAffiliation] = useState(
		current_user?.political_affiliation
	);
	const [language, setLanguage] = useState(current_user?.language);
	const [kids, setKids] = useState(current_user?.kids);
	const [pets, setPets] = useState(current_user?.pets);
	const [diet, setDiet] = useState(current_user?.diet);
	const [smoker, setSmoker] = useState(current_user?.smoker);
	const [drinker, setDrinker] = useState(current_user?.drinker);
	const [marijuana, setMarijuana] = useState(current_user?.marijuana);
	const [zodiac, setZodiac] = useState(current_user?.zodiac);
	const [ethnicity, setEthnicity] = useState(current_user?.ethnicity);
	const [bodyType, setBodyType] = useState(current_user?.body_type);
	const [educationLevel, setEducationLevel] = useState(
		current_user?.education_level
	);
	const [bio, setBio] = useState(current_user?.bio);
	const [age, setAge] = useState(current_user?.age);

	useEffect(() => {
		dispatch(thunkCurrentUserProfile())
			.then(() => setLoaded(true))
			.then(() => setCity(current_user.city))
			.then(() => setState(current_user.state))
			.then(() => setOccupation(current_user.occupation))
			.then(() => setGender(current_user.gender))
			.then(() => setSexualOrientation(current_user.sexual_orientation))
			.then(() => setHeight(current_user.height))
			.then(() => setReligion(current_user.religion))
			.then(() => setPoliticalAffiliation(current_user.political_affiliation))
			.then(() => setLanguage(current_user.language))
			.then(() => setKids(current_user.kids))
			.then(() => setPets(current_user.pets))
			.then(() => setDiet(current_user.diet))
			.then(() => setSmoker(current_user.smoker))
			.then(() => setDrinker(current_user.drinker))
			.then(() => setMarijuana(current_user.marijuana))
			.then(() => setZodiac(current_user.zodiac))
			.then(() => setEthnicity(current_user.ethnicity))
			.then(() => setBodyType(current_user.body_type))
			.then(() => setEducationLevel(current_user.education_level))
			.then(() => setBio(current_user.bio))
			.then(() => setAge(current_user.age));
	}, [dispatch, loaded]);

	async function handleDelete() {
		const awaitedData = await dispatch(thunkDeleteUserProfile());
		if (awaitedData) {
			dispatch(logout());
			history.push("/");
		}
	}

	const genderChoices = ["", "Man", "Woman", "Nonbinary"];
	const sexualOrientationChoices = [
		"",
		"Straight",
		"Gay",
		"Lesbian",
		"Bisexual",
		"Queer",
		"Pansexual",
		"Questioning",
		"Heteroflexible",
		"Homoflexible",
		"Asexual",
		"Gray-asexual",
		"Demisexual",
		"Reciprosexual",
		"Akiosexual",
		"Aceflux",
		"Grayromantic",
		"Demiromantic",
		"Recipromantic",
		"Akioromantic",
		"Aroflux",
	];
	const heightChoices = [
		"",
		"4'0",
		"4'1",
		"4'2",
		"4'3",
		"4'4",
		"4'5",
		"4'6",
		"4'7",
		"4'8",
		"4'9",
		"4'10",
		"4'11",
		"5'0",
		"5'1",
		"5'2",
		"5'3",
		"5'4",
		"5'5",
		"5'6",
		"5'7",
		"5'8",
		"5'9",
		"5'10",
		"5'11",
		"6'0",
		"6'1",
		"6'2",
		"6'3",
		"6'4",
		"6'5",
		"6'6",
		"6'7",
		"6'8",
		"6'9",
		"6'10",
		"6'11",
		"7'0+",
	];
	const religionChoices = [
		"",
		"Agnosticism",
		"Atheism",
		"Christianity",
		"Judaism",
		"Catholicism",
		"Islam",
		"Hinduism",
		"Buddhism",
		"Sikh",
		"Other religion",
	];
	const politicalAffiliationChoices = [
		"",
		"Liberal",
		"Moderate",
		"Conservative",
		"Other political beliefs",
	];
	const languageChoices = [
		"",
		"English",
		"Afrikaans",
		"Albanian",
		"Arabic",
		"Armenian",
		"Basque",
		"Belarusian",
		"Bengali",
		"Breton",
		"Bulgarian",
		"Catalan",
		"Cebuano",
		"Chechen",
		"Chinese",
		"Chinese (Cantonese)",
		"Chinese (Mandarin)",
		"C++",
		"Croatian",
		"Czech",
		"Danish",
		"Dutch",
		"Esperanto",
		"Estonian",
		"Finnish",
		"French",
		"Frisian",
		"Georgian",
		"German",
		"Greek",
		"Gujarati",
		"Ancient Greek",
		"Hawaiian",
		"Hebrew",
		"Hindi",
		"Hungarian",
		"Icelandic",
		"Ilongo",
		"Indonesian",
		"Irish",
		"Italian",
		"Japanese",
		"Khmer",
		"Korean",
		"Latin",
		"Latvian",
		"LISP",
		"Lithuanian",
		"Malay",
		"Maori",
		"Mongolian",
		"Norwegian",
		"Occitan",
		"Other language",
		"Persian",
		"Polish",
		"Portuguese",
		"Punjabi",
		"Romanian",
		"Rotuman",
		"Russian",
		"Sanskrit",
		"Sardinian",
		"Serbian",
		"Sign Language",
		"Slovak",
		"Slovenian",
		"Spanish",
		"Swahili",
		"Swedish",
		"Tagalog",
		"Tamil",
		"Thai",
		"Tibetan",
		"Turkish",
		"Ukrainian",
		"Urdu",
		"Vietnamese",
		"Welsh",
		"Yiddish",
	];
	const kidsChoices = [
		"",
		"Doesn't have kids but might want them",
		"Doesn't have kids but wants them",
		"Doesn't have kids and doesn't want them",
		"Has kid(s) and doesn't want more",
		"Has kid(s) and might want more",
		"Has kid(s) and wants more",
	];
	const petsChoices = [
		"",
		"Doesn't have pet(s)",
		"Has other pet(s)",
		"Has cat(s)",
		"Has dog(s)",
	];
	const dietChoices = [
		"",
		"Omnivore",
		"Vegetarian",
		"Vegan",
		"Kosher",
		"Halal",
		"Gluten Free",
		"Pescatarian",
		"Jain",
		"Lactovegetarian",
		"Intermittent Fasting",
		"Ketogenic",
	];
	const smokerChoices = [
		"",
		"Smokes cigarettes regularly",
		"Smokes cigarettes sometimes",
		"Doesn't smoke cigarettes",
	];
	const drinkerChoices = [
		"",
		"Drinks often",
		"Drinks sometimes",
		"Doesn't drink",
	];
	const marijuanaChoices = [
		"",
		"Smokes marijuana often",
		"Smokes marijuana sometimes",
		"Never smokes marijuana",
	];
	const zodiacChoices = [
		"",
		"Aquarius",
		"Pisces",
		"Aries",
		"Taurus",
		"Gemini",
		"Cancer",
		"Leo",
		"Virgo",
		"Libra",
		"Scorpio",
		"Sagittarius",
		"Capricorn",
	];
	const ethnicityChoices = [
		"",
		"Asian",
		"Black",
		"Hispanic/Latin",
		"Indian",
		"Middle Eastern",
		"Native American",
		"Pacific Islander",
		"White",
		"Other ethnicity",
	];
	const bodyTypeChoices = [
		"",
		"Thin",
		"Overweight",
		"Average build",
		"Fit",
		"Jacked",
		"A little extra",
		"Curvy",
		"Full figured",
	];
	const educationLevelChoices = [
		"",
		"High school",
		"Trade/tech school",
		"In college",
		"Undergraduate degree",
		"In grad school",
		"Graduate degree",
	];

	const handleSubmit = async (e) => {
		e.preventDefault();

		let sexual_orientation = sexualOrientation;
		let political_affiliation = politicalAffiliation;
		let body_type = bodyType;
		let education_level = educationLevel;

		const data = {
			city,
			state,
			occupation,
			gender,
			sexual_orientation,
			height,
			religion,
			political_affiliation,
			language,
			kids,
			pets,
			diet,
			smoker,
			drinker,
			marijuana,
			zodiac,
			ethnicity,
			body_type,
			education_level,
			bio,
			age,
		};

		const edited_profile = await dispatch(thunkEditProfile(data));

		// console.log("EDITED PROFILE---> SENDING TO THUNK", edited_profile);

		if (edited_profile) history.push("/profile/current_user");
		// 	if (data) {
		// 		// setErrors(data);
		// 	} else {

		// 	}
	};

	if (!current_user) return null;
	else {
		return (
			<>
				<form onSubmit={handleSubmit}>
					{/* <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul> */}
					<label>
						City:
						<input
							type='text'
							value={city}
							onChange={(e) => setCity(e.target.value)}
							required
						/>
					</label>
					<label>
						State
						<input
							type='text'
							value={state}
							onChange={(e) => setState(e.target.value)}
							required
						/>
					</label>
					<label>
						Occupation
						<input
							type='text'
							value={occupation}
							onChange={(e) => setOccupation(e.target.value)}
							required
						/>
					</label>
					<label>
						Age
						<input
							type='number'
							value={age}
							onChange={(e) => setAge(e.target.value)}
							required
						/>
					</label>
					<label>
						Bio
						<textarea
							type='text'
							value={bio}
							onChange={(e) => setBio(e.target.value)}
							required
						/>
					</label>

					<label>
						Gender
						<select
							type='text'
							name='gender'
							onChange={(e) => setGender(e.target.value)}
							value={gender}
						>
							{genderChoices.map((option) => (
								<option key={option}>{option}</option>
							))}
						</select>
					</label>
					<label>
						Sexual Orientation
						<select
							type='text'
							name='sexualOrientation'
							onChange={(e) => setSexualOrientation(e.target.value)}
							value={sexualOrientation}
						>
							{sexualOrientationChoices.map((option) => (
								<option key={option}>{option}</option>
							))}
						</select>
					</label>
					<label>
						Height
						<select
							type='text'
							name='height'
							onChange={(e) => setHeight(e.target.value)}
							value={height}
						>
							{heightChoices.map((option) => (
								<option key={option}>{option}</option>
							))}
						</select>
					</label>
					<label>
						Religion
						<select
							type='text'
							name='religion'
							onChange={(e) => setReligion(e.target.value)}
							value={religion}
						>
							{religionChoices.map((option) => (
								<option key={option}>{option}</option>
							))}
						</select>
					</label>
					<label>
						Political Affiliation
						<select
							type='text'
							name='politicalAffiliation'
							onChange={(e) => setPoliticalAffiliation(e.target.value)}
							value={politicalAffiliation}
						>
							{politicalAffiliationChoices.map((option) => (
								<option key={option}>{option}</option>
							))}
						</select>
					</label>
					<label>
						Language
						<select
							type='text'
							name='language'
							onChange={(e) => setLanguage(e.target.value)}
							value={language}
						>
							{languageChoices.map((option) => (
								<option key={option}>{option}</option>
							))}
						</select>
					</label>
					<label>
						Kids
						<select
							type='text'
							name='kids'
							onChange={(e) => setKids(e.target.value)}
							value={kids}
						>
							{kidsChoices.map((option) => (
								<option key={option}>{option}</option>
							))}
						</select>
					</label>
					<label>
						Pets
						<select
							type='text'
							name='pets'
							onChange={(e) => setPets(e.target.value)}
							value={pets}
						>
							{petsChoices.map((option) => (
								<option key={option}>{option}</option>
							))}
						</select>
					</label>
					<label>
						Diet
						<select
							type='text'
							name='diet'
							onChange={(e) => setDiet(e.target.value)}
							value={diet}
						>
							{dietChoices.map((option) => (
								<option key={option}>{option}</option>
							))}
						</select>
					</label>
					<label>
						Smoker
						<select
							type='text'
							name='smoker'
							onChange={(e) => setSmoker(e.target.value)}
							value={smoker}
						>
							{smokerChoices.map((option) => (
								<option key={option}>{option}</option>
							))}
						</select>
					</label>
					<label>
						Drinker
						<select
							type='text'
							name='drinker'
							onChange={(e) => setDrinker(e.target.value)}
							value={drinker}
						>
							{drinkerChoices.map((option) => (
								<option key={option}>{option}</option>
							))}
						</select>
					</label>
					<label>
						Marijuana
						<select
							type='text'
							name='marijuana'
							onChange={(e) => setMarijuana(e.target.value)}
							value={marijuana}
						>
							{marijuanaChoices.map((option) => (
								<option key={option}>{option}</option>
							))}
						</select>
					</label>
					<label>
						Zodiac
						<select
							type='text'
							name='zodiac'
							onChange={(e) => setZodiac(e.target.value)}
							value={zodiac}
						>
							{zodiacChoices.map((option) => (
								<option key={option}>{option}</option>
							))}
						</select>
					</label>
					<label>
						Ethnicity
						<select
							type='text'
							name='ethnicity'
							onChange={(e) => setEthnicity(e.target.value)}
							value={ethnicity}
						>
							{ethnicityChoices.map((option) => (
								<option key={option}>{option}</option>
							))}
						</select>
					</label>
					<label>
						Body Type
						<select
							type='text'
							name='bodyType'
							onChange={(e) => setBodyType(e.target.value)}
							value={bodyType}
						>
							{bodyTypeChoices.map((option) => (
								<option key={option}>{option}</option>
							))}
						</select>
					</label>
					<label>
						Education Level
						<select
							type='text'
							name='educationLevel'
							onChange={(e) => setEducationLevel(e.target.value)}
							value={educationLevel}
						>
							{educationLevelChoices.map((option) => (
								<option key={option}>{option}</option>
							))}
						</select>
					</label>

					<button type='submit'>Edit Profile</button>
					<button onClick={handleDelete}>Delete Profile</button>
				</form>
			</>
		);
	}
}
