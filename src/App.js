import React from 'react';
import './App.scss';
import { NavBar } from './components';
import { ToDo } from './container/toDo/ToDo';

function App() {
	return (
		<div className="App">
			<NavBar/>
			<ToDo />
		</div>
	);
}

export default App;
