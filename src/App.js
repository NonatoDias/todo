import React from 'react';
import './App.scss';
import { NavBar } from './components';
import { ToDo } from './container/toDo/ToDo';
import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route path="/" exact={true} component={ToDo} />
			</Switch>
		</div>
	);
}

export default App;
