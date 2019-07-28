import React, { Component } from 'react';
import './ToDo.scss';
import { CircleButton, Card } from '../../components';
import AddIcon from '../../assets/img/add.png';

class ToDo extends Component {
	state = {
		items: [
			{
				id: 1,
				title: 'Test title',
				text: 'Test text'
			},
			{
				id: 2,
				title: 'Test title',
				text: 'Test text'
			}
		]
	};

	render() {
		return (
			<div className="ToDo">
				<div className="ToDo-overflow">
					<div className="ToDo-content">
						{this.state.items.map(item => {
							return <Card key={item.id} {...item} />;
						})}
					</div>
				</div>
				<div className="ToDo-actions">
					<CircleButton icon={AddIcon} />
					<CircleButton icon={AddIcon} />
				</div>
			</div>
		);
	}
}

export { ToDo };
