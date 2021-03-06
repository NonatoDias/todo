import React from 'react';
import './CircleButton.scss';
import PropTypes from 'prop-types';


const CircleButton = (props) => {
	const p = {
		...props
	}
	delete p.icon;
	return (
		<button {...p} className="CircleButton">
			<span>
				<i className={props.icon} />
			</span>
		</button>
	);
};

CircleButton.propTypes = {
	icon: PropTypes.string,
};


export { CircleButton };
