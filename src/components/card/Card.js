import React, { useState, useEffect } from 'react';
import './Card.scss';
import PropTypes from 'prop-types';

const Card = props => {
	const [editing, setEditing] = useState(false);
	const [title, setTitle] = useState(props.data.title);
	const [text, setText] = useState(props.data.text);

	const editHandler = () => {
		setEditing(true);
	};

	const deleteHandler = () => {
		props.onDelete({
			...props.data,
			title: title,
			text: text
		});
	};

	const saveHandler = () => {
		props.onSave({
			...props.data,
			id: props.data.id || (new Date()).getTime(),
			title,
			text
		})
		setEditing(false);
	};

	useEffect(()=> {
		if(!props.data.id){
			setEditing(true)
		}
		setTitle(props.data.title);
		setText(props.data.text);
	}, [props.data])


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
						<h1 className="h-card-title">{props.data.title}</h1>
					) : (
						<input
							value={title}
							onChange={(e)=>{setTitle(e.target.value)}}
						/>
					)}
				</div>
				<div className="p-card-text">
					{!editing ? (
						<h5 className="h-card-title">{props.data.text}</h5>
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
	data: PropTypes.shape({
		title: PropTypes.string,
		text: PropTypes.string
	}),
	onDelete: PropTypes.func,
	onSave: PropTypes.func,
};

Card.defaultProps = {
	data: {
		title: 'No title',
		text: 'No text'
	}
};

export { Card };
