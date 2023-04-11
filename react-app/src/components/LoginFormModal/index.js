import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";
import { useHistory } from "react-router-dom";

function LoginFormModal() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();
	const demoInput = () => {
		setEmail("demo@aa.io");
		setPassword("password");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = await dispatch(login(email, password));
		if (data) {
			setErrors(data);
		} else {
			history.push("/discover");
			closeModal();
		}
	};

	return (
		<>
			<h1 id='login-h1'>Log In</h1>
			<form className='login-form' onSubmit={handleSubmit}>
				<ul>
					{errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul>

				<label>
					Email
					<input
						type='text'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>
				<label>
					Password
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</label>

				<button className='like-button' type='submit'>
					Log In
				</button>
				<button className='dislike-button' onClick={demoInput}>
					Demo User
				</button>
			</form>
		</>
	);
}

export default LoginFormModal;
