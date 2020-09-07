import React from 'react';
import './Card.scss';

import CardHeader from '../Card-header/Card-header.js';
import CardMain from '../Card-main/Card-main.js';
import CardMessage from '../Card-message/Card-message';


class Card extends React.Component {
    constructor() {
        super();
    }
    render() {
        const cardData = this.props.cardData;
        // const cardMessage = 'Порадуй котэ';
        const selected = false;

        return (
            <div>
                <div className="card">
                    <CardHeader cardHeader={cardData.header} />
                    <CardMain
                        info={cardData.info}
                        taste={cardData.taste}
                        weight={cardData.weight}
                    />
                </div>

                <CardMessage
                    isSelected={selected}
                    amount={cardData.amount}
                    messages={cardData.messages}
                ></CardMessage>
            </div>

        );
    }
}

export default Card;