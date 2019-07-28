import React from 'react';
import './App.scss';
import { NavBar } from './components/navBar/NavBar';
import { ToDo } from './container/todo/todo';

function App() {
	return (
		<div className="App">
			<NavBar/>
			<ToDo />
		</div>
	);
}

export default App;
