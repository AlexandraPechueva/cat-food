import React from 'react';
import './Card-message.scss';

class CardMessage extends React.Component {
	render() {
		const { isSelected, isDisabled, messages } = this.props;

		return (
			isDisabled ? <p className="card-message card-message_disabled ">{messages.disabled}</p> :
				isSelected ? <p className="card-message">{messages.selected}</p> :
					<p className="card-message">
						{messages.default}
						<button className="button-link" onClick={this.props.handleClick}>купи</button>
					</p>
		);
	}
}

export default CardMessage;