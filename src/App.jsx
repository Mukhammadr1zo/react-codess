import React from 'react';
import './App.scss';

import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

import useToken from './Hooks/useToken';

function App() {
	const [isLoggedIn] = useToken();

	if (isLoggedIn) {
		return <AuthenticatedApp />;
	} else {
		return <UnauthenticatedApp />;
	}
}

export default App;
