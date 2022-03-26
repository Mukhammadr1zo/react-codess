import React from 'react';

const Context = React.createContext();

function Provider({ children }) {
	const [lang, setLang] = React.useState('uz');
	return <Context.Provider value={{ lang, setLang }}>{children}</Context.Provider>;
}

export { Context, Provider };
