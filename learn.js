// import React from 'react';
// import './App.scss';

// import ModalRef from './Components/ModalRef/ModalRef';
// import ModalState from './Components/ModalState/ModalState';

// function App() {
// 	const modalRef = React.useRef(null);

// 	const [isModalOpen, setIsModalOpen] = React.useState(false);

// 	return (
// 		<main>
// 			<button onClick={() => modalRef.current.classList.add('modal--open')}>Ref Modal Open</button>

// 			<button onClick={() => setIsModalOpen(true)}>State Modal Open</button>

// 			<ModalRef ref={modalRef} />
// 			<ModalState isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
// 		</main>
// 	);
// }

// export default App;

// ----------------------------
// useEffect basic
// ----------------------------

// import React from 'react';
// import './App.scss';

// function App() {
// 	const [username, setUsername] = React.useState('Salom');
// 	const [age, setAge] = React.useState(13);
// 	const [isDisabled, setIsDisabled] = React.useState(false);

// 	React.useEffect(() => {
// 		window.document.title = username;
// 	}, [username]);

// 	React.useEffect(() => {
// 		if (username.length > 3 && age > 16) {
// 			setIsDisabled(false);
// 		} else {
// 			setIsDisabled(true);
// 		}
// 	}, [username, age]);

// 	return (
// 		<form>
// 			<input
// 				type='text'
// 				value={username}
// 				onChange={(evt) => {
// 					setUsername(evt.target.value);
// 				}}
// 			/>

// 			<h1>{username}</h1>

// 			<input
// 				type='number'
// 				value={age}
// 				onChange={(evt) => {
// 					setAge(evt.target.value);
// 				}}
// 			/>

// 			<button disabled={isDisabled}>Submit</button>
// 		</form>
// 	);
// }

// export default App;
