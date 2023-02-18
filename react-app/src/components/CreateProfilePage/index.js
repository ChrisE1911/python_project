import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { thunkCreateProfile } from "../../store/profile";
import "./CreateProfilePage.css"

function CreateProfilePage() {
	const dispatch = useDispatch();
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [occupation, setOccupation] = useState("");
	const [gender, setGender] = useState("");
	const [sexualOrientation, setSexualOrientation] = useState("");
	const [height, setHeight] = useState("");
	const [religion, setReligion] = useState("");
	const [politicalAffiliation, setPoliticalAffiliation] = useState("");
	const [language, setLanguage] = useState("");
	const [kids, setKids] = useState("");
	const [pets, setPets] = useState("");
	const [diet, setDiet] = useState("");
	const [smoker, setSmoker] = useState("");
	const [drinker, setDrinker] = useState("");
	const [marijuana, setMarijuana] = useState("");
	const [zodiac, setZodiac] = useState("");
	const [ethnicity, setEthnicity] = useState("");
	const [bodyType, setBodyType] = useState("");
	const [educationLevel, setEducationLevel] = useState("");
	const [bio, setBio] = useState("");
	const [age, setAge] = useState("");
	const [pictureUrl, setPictureUrl] = useState("");
	console.log("change for emailvalidator install")

	const [errors, setErrors] = useState([]);
	const history = useHistory();

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
		"<4'0",
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
		let picture_url = pictureUrl;

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
			picture_url,
		};

		// if (data) {
		// 	setErrors(data);
		// }

		await dispatch(thunkCreateProfile(data));
		history.push("/discover");
	};

	return (
		<>
			<h1>Profile Information</h1>
			<h3>Tell us about you!</h3>
			<div className="create-form-container">


			<fieldset>
			<form className="create-profile-form" onSubmit={handleSubmit}>
				<ul>
					{/* {errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))} */}
				</ul>
				<label className="create-profile-field">
					City
					<input
						type='text'
						value={city}
						onChange={(e) => setCity(e.target.value)}
						required
						maxLength={50}
					/>
				</label>
				<label className="create-profile-field">
					State
					<input
						type='text'
						value={state}
						onChange={(e) => setState(e.target.value)}
						required
						maxLength={20}
					/>
				</label>
				<label className="create-profile-field">
					Occupation
					<input
						type='text'
						value={occupation}
						onChange={(e) => setOccupation(e.target.value)}
						required
						maxLength={20}
					/>
				</label>
				<label className="create-profile-field">
					Age
					<input
						type='number'
						value={age}
						onChange={(e) => setAge(e.target.value)}
						required
						min={18}
					/>
				</label>
				<label className="create-profile-field">
					Bio
					<textarea
						type='text'
						value={bio}
						onChange={(e) => setBio(e.target.value)}
						required
						maxLength={500}
					/>
				</label>
				<label className="create-profile-field">
					Picture URL
					<input
						type='url'
						value={pictureUrl}
						onChange={(e) => setPictureUrl(e.target.value)}
						required
					/>
				</label>

				<label className="create-profile-field">
					Gender
					<select
						type='text'
						name='gender'
						onChange={(e) => setGender(e.target.value)}
						value={gender}
						required
					>
						{genderChoices.map((option) => (
							<option key={option}>{option}</option>
						))}
					</select>
				</label>
				<label className="create-profile-field">
					Sexual Orientation
					<select
						type='text'
						name='sexualOrientation'
						onChange={(e) => setSexualOrientation(e.target.value)}
						value={sexualOrientation}
						required
					>
						{sexualOrientationChoices.map((option) => (
							<option key={option}>{option}</option>
						))}
					</select>
				</label>
				<label className="create-profile-field">
					Height
					<select
						type='text'
						name='height'
						onChange={(e) => setHeight(e.target.value)}
						value={height}
						required
					>
						{heightChoices.map((option) => (
							<option key={option}>{option}</option>
						))}
					</select>
				</label>
				<label className="create-profile-field">
					Religion
					<select
						type='text'
						name='religion'
						onChange={(e) => setReligion(e.target.value)}
						value={religion}
						required
					>
						{religionChoices.map((option) => (
							<option key={option}>{option}</option>
						))}
					</select>
				</label>
				<label className="create-profile-field">
					Political Affiliation
					<select
						type='text'
						name='politicalAffiliation'
						onChange={(e) => setPoliticalAffiliation(e.target.value)}
						value={politicalAffiliation}
						required
					>
						{politicalAffiliationChoices.map((option) => (
							<option key={option}>{option}</option>
						))}
					</select>
				</label>
				<label className="create-profile-field">
					Language
					<select
						type='text'
						name='language'
						onChange={(e) => setLanguage(e.target.value)}
						value={language}
						required
					>
						{languageChoices.map((option) => (
							<option key={option}>{option}</option>
						))}
					</select>
				</label>
				<label className="create-profile-field">
					Kids
					<select
						type='text'
						name='kids'
						onChange={(e) => setKids(e.target.value)}
						value={kids}
						required
					>
						{kidsChoices.map((option) => (
							<option key={option}>{option}</option>
						))}
					</select>
				</label>
				<label className="create-profile-field">
					Pets
					<select
						type='text'
						name='pets'
						onChange={(e) => setPets(e.target.value)}
						value={pets}
						required
					>
						{petsChoices.map((option) => (
							<option key={option}>{option}</option>
						))}
					</select>
				</label>
				<label className="create-profile-field">
					Diet
					<select
						type='text'
						name='diet'
						onChange={(e) => setDiet(e.target.value)}
						value={diet}
						required
					>
						{dietChoices.map((option) => (
							<option key={option}>{option}</option>
						))}
					</select>
				</label>
				<label className="create-profile-field">
					Smoker
					<select
						type='text'
						name='smoker'
						onChange={(e) => setSmoker(e.target.value)}
						value={smoker}
						required
					>
						{smokerChoices.map((option) => (
							<option key={option}>{option}</option>
						))}
					</select>
				</label>
				<label className="create-profile-field">
					Drinker
					<select
						type='text'
						name='drinker'
						onChange={(e) => setDrinker(e.target.value)}
						value={drinker}
						required
					>
						{drinkerChoices.map((option) => (
							<option key={option}>{option}</option>
						))}
					</select>
				</label>
				<label className="create-profile-field">
					Marijuana
					<select
						type='text'
						name='marijuana'
						onChange={(e) => setMarijuana(e.target.value)}
						value={marijuana}
						required
					>
						{marijuanaChoices.map((option) => (
							<option key={option}>{option}</option>
						))}
					</select>
				</label>
				<label className="create-profile-field">
					Zodiac
					<select
						type='text'
						name='zodiac'
						onChange={(e) => setZodiac(e.target.value)}
						value={zodiac}
						required
					>
						{zodiacChoices.map((option) => (
							<option key={option}>{option}</option>
						))}
					</select>
				</label>
				<label className="create-profile-field">
					Ethnicity
					<select
						type='text'
						name='ethnicity'
						onChange={(e) => setEthnicity(e.target.value)}
						value={ethnicity}
						required
					>
						{ethnicityChoices.map((option) => (
							<option key={option}>{option}</option>
						))}
					</select>
				</label>
				<label className="create-profile-field">
					Body Type
					<select
						type='text'
						name='bodyType'
						onChange={(e) => setBodyType(e.target.value)}
						value={bodyType}
						required
					>
						{bodyTypeChoices.map((option) => (
							<option key={option}>{option}</option>
						))}
					</select>
				</label>
				<label className="create-profile-field">
					Education Level
					<select
						type='text'
						name='educationLevel'
						onChange={(e) => setEducationLevel(e.target.value)}
						value={educationLevel}
						required
					>
						{educationLevelChoices.map((option) => (
							<option key={option}>{option}</option>
						))}
					</select>
				</label>

				<button type='submit'>Create Profile</button>
			</form>
							</fieldset>
							</div>
		</>
	);
}

export default CreateProfilePage;
