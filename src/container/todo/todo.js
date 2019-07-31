import React, { Component } from 'react';
import './ToDo.scss';
import { CircleButton, Card } from '../../components';
import { fetchItems } from '../../api/todoAPI';


class ToDo extends Component {
	state = {
		items: [],
		isNewVisible: false
	};

	itemModel = {
		title: 'Test title',
		text: 'Test text'
	};

	componentDidMount(){
		fetchItems().then(({data}) => {
			this.setState({
				items: data.items
			})
		})
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
								data={this.itemModel}
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
										data={item}
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
						icon="icon-plus"
						onClick={this.addNewHandler}
					/>
				</div>
			</div>
		);
	}
}

export { ToDo };
