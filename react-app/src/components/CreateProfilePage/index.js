import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

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
  const [marijuana, setMarijuana] = useState("");
  const [zodiac, setZodiac] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [bio, setBio] = useState("");
  const [age, setAge] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");

	const [errors, setErrors] = useState([]);
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();

    let sexual_orientation=sexualOrientation
    let political_affiliation=politicalAffiliation
    let body_type=bodyType
    let education_level=educationLevel
    let userImages=pictureUrl

		const data = await dispatch(thunkCreateProfile(
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
      userImages
      ));

		if (data) {
			setErrors(data);
		} else {
			history.push("/discover");

		}

	};

	return (
		<>
			<h1>Profile Information</h1>
      <h3>Tell us about you!</h3>
			<form onSubmit={handleSubmit}>
				<ul>
					{errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul>
				<label>
					City
					<input
						type="text"
						value={city}
						onChange={(e) => setCity(e.target.value)}
						required
					/>
				</label>
				<label>
					State
					<input
						type="text"
						value={state}
						onChange={(e) => setState(e.target.value)}
						required
					/>
				</label>
				<label>
          Occupation
					<input
						type="text"
						value={occupation}
						onChange={(e) => setOccupation(e.target.value)}
						required
					/>
				</label>
				<label>
					Gender
					<input
						type="text"
						value={gender}
						onChange={(e) => setGender(e.target.value)}
						required
					/>
				</label>
				<label>
					Sexual Orientaton
					<input
						type="password"
						value={sexualOrientation}
						onChange={(e) => setSexualOrientation(e.target.value)}
						required
					/>
				</label>
				<label>
					Height
					<input
						type="password"
						value={height}
						onChange={(e) => setHeight(e.target.value)}
						required
					/>
				</label>
				<button type="submit">Create Profile</button>
			</form>
		</>
	);
}

export default CreateProfilePage;
