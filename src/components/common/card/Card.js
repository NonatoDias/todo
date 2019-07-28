import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types';

const Card = props => {
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
					<h1 className="h-card-title">{props.title}</h1>
				</div>
				<p className="p-card-text">{props.text}</p>
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
