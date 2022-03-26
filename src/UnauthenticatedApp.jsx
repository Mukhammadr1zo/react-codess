import React from 'react';
import useToken from './Hooks/useToken';

function UnauthenticatedApp() {
	const [setIsLoggedIn] = useToken(true);

	const handleSubmit = async (evt) => {
		evt.preventDefault();

		const { email, password } = evt.target.elements;

		const res = await fetch('https://reqres.in/api/login', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				email: email.value.trim(),
				password: password.value.trim(),
			}),
		});

		const data = await res.json();

		if (data?.token) {
			setIsLoggedIn(data?.token);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<input type='email' name='email' placeholder='email' defaultValue='eve.holt@reqres.in' />
			</div>

			<div>
				<input type='password' name='password' placeholder='password' defaultValue='cityslicka' />
			</div>

			<button type='submit'>Log In</button>
		</form>
	);
}

export default UnauthenticatedApp;
