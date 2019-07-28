import React from 'react';
import classes from './NavBar.module.scss';
import logo from "../../assets/img/todo.png"

const NavBar = () => {
	return (
		<div className={classes.NavBar}>
			<img className={classes.logo} src={logo} alt="" />
			<h1 className={classes.title}>Things to do</h1>
		</div>
	);
};

export { NavBar };
