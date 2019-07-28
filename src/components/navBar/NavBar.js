import React from 'react';
import './NavBar.scss';

const NavBar = () => {
	return (
		<div className="div-navbar noselect">
			<img className="img-title" src="img/todo.png" alt="" />
			<h1 className="h1-title">Things to do</h1>
		</div>
	);
};

export { NavBar };
