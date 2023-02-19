import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import { thunkCreateProfile } from "../../store/profile";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;
  console.log("WE ARE IN SIGNUP FORM PAGE")
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
        const data = await dispatch(signUp(username, firstName, lastName, email, password))
        console.log("FROM SIGNUP FORM PAGE COMPONENT", data)

        // if (data) {
        //   await dispatch(thunkCreateProfile({
        //     user_id: data.id,
        //     city: "Blank",
        //     state: "Blank",
        //     occupation: "Blank",
        //     gender: "Nonbinary",
        //     sexual_orientation: "Asexual",
        //     height: "<4'0",
        //     religion: "Other religion",
        //     political_affiliation: "Other political beliefs",
        //     language: "English",
        //     kids: "Doesn't have kids but might want them",
        //     pets: "Doesn't have pet(s)",
        //     drinker: "Doesn't drink",
        //     diet: "Omnivore",
        //     smoker: "Doesn't smoke cigarettes",
        //     marijuana: "Never smokes marijuana",
        //     zodiac: "Aquarius",
        //     ethnicity: "Other ethnicity",
        //     body_type: "Thin",
        //     education_level: "High school",
        //     bio: "No bio written yet!",
        //     age: 18,
        //     picture_url: "https://imgs.search.brave.com/j6LvyJzEO_tVPwInMfwerPZyHUE0NcuPIhjVzBN-cKc/rs:fit:375:500:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY1LzBi/L2E3LzY1MGJhNzM0/N2UyZDg3NTFjMTU3/YjcwZDc5MTEyM2I4/LmpwZw"
        //   }))
        // }
        if (data) {
          setErrors(data)
        }
    } else {
        setErrors(['Confirm Password field must be the same as the Password field']);
    }
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
					First Name
					<input
						type="text"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						required
					/>
				</label>
				<label>
					Last Name
					<input
						type="text"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						required
					/>
				</label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

export default SignupFormPage;
