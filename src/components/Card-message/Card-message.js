import React from 'react';
import './Card-message.scss';

class CardMessage extends React.Component {
    constructor() {
        super();
    }
    render() {
        const { amount, isSelected, messages } = this.props;
        // console.log(text)
        return (
            amount == 0 ? <p className="card-message">{messages.disabled}</p> :
                isSelected ? <p className="card-message">{messages.selected}</p> : <p className="card-message">{messages.default} купи</p>

        );
    }
}

export default CardMessage;