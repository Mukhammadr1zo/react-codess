import React from 'react';

const Context = React.createContext(null);

function Provider({ children }) {
	const [state, setState] = React.useState(window.localStorage.getItem('theme') || 'light');

	React.useEffect(() => {
		if (state) {
			window.localStorage.setItem('state', state);
		} else {
			window.localStorage.removeItem('theme');
		}
	}, [state]);

	return <Context.Provider value={{ state, setState }}>{children}</Context.Provider>;
}

export { Context, Provider };
