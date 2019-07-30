import React, { useState, useEffect } from 'react';
import './Card.scss';
import PropTypes from 'prop-types';

const Card = props => {
	const [editing, setEditing] = useState(false);
	const [title, setTitle] = useState(props.title);
	const [text, setText] = useState(props.text);

	const editHandler = () => {
		setEditing(true);
	};

	const deleteHandler = () => {
		props.onDelete({
			id: props.id,
			title: title,
			text: text
		});
	};

	const saveHandler = () => {
		props.onSave({
			id: props.id || (new Date()).getTime(),
			title: title,
			text: text
		})
		setEditing(false);
	};

	useEffect(()=> {
		if(!props.id){
			setEditing(true)
		}
		setTitle(props.title);
		setText(props.text);
	}, [props])


	return (
		<div className="Card">
			<img
				className="img-card"
				src="img/lowpriority.png"
				alt=""
				srcSet=""
			/>
			<div className="div-card-description">
				<div className="div-card-title">
					{!editing ? (
						<h1 className="h-card-title">{props.title}</h1>
					) : (
						<input
							value={title}
							onChange={(e)=>{setTitle(e.target.value)}}
						/>
					)}
				</div>
				<div className="p-card-text">
					{!editing ? (
						<h5 className="h-card-title">{props.text}</h5>
					) : (
						<input
							value={text}
							onChange={(e)=>{setText(e.target.value)}}
						/>
					)}
				</div>
				{!editing ? (
					<div className="Card-actions">
						<button onClick={editHandler}>Edit</button>
					</div>
				) : (
					<div className="Card-actions">
						<button onClick={deleteHandler}>Delete</button>
						<button onClick={saveHandler}>Save</button>
					</div>
				)}
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string
};

Card.defaultProps = {
	title: 'No title',
	text: 'No text'
};

export { Card };
