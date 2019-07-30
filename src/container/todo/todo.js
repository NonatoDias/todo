import React, { Component } from 'react';
import './ToDo.scss';
import { CircleButton, Card } from '../../components';
import AddIcon from '../../assets/img/add.png';


class ToDo extends Component {
	state = {
		items: [{
			id: 1,
			title: 'Title',
			text: 'Text'
		}],
		isNewVisible: true
	};

	itemModel = {
		title: 'Test title',
		text: 'Test text'
	}

	addNewHandler = () => {
		this.setState({isNewVisible: true});
	};

	editHandler = (data, i) => {
		this.setState({
			items: [
				...this.state.items.slice(0, i),
				{...data},
				...this.state.items.slice(i + 1)
			]
		});
	};

	saveNewHandler = (newItem) => {
		this.setState({
			items: [
				newItem,
				...this.state.items
			],
			isNewVisible: false
		});
	}

	deleteHandler= (data, i) => {
		this.setState({
			items: [
				...this.state.items.slice(0, i),
				...this.state.items.slice(i + 1)
			]
		});
	};

	render() {
		return (
			<div className="ToDo">
				<div className="ToDo-overflow">
					<div className="ToDo-content">
						<div>
						{this.state.isNewVisible && (
							<Card
								{...this.itemModel}
								onSave={this.saveNewHandler}
								onDelete={data => {this.setState({isNewVisible: false})}}
							/>
						)}
						</div>
						<div>
							{this.state.items.map((item, i) => {
								return (
									<Card
										key={item.id}
										{...item}
										onSave={data => {
											this.editHandler(data, i);
										}}
										onDelete={data => {
											this.deleteHandler(data, i);
										}}
									/>
								);
							})}
						</div>
					</div>
				</div>
				<div className="ToDo-actions">
					<CircleButton
						icon={AddIcon}
						onClick={this.addNewHandler}
					/>
				</div>
			</div>
		);
	}
}

export { ToDo };
