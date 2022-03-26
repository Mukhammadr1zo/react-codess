import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import { BrowserRouter } from 'react-router-dom';

import { Provider as AuthProvider } from './Context/Authentication';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<App />
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
