import React from 'react';
import './Card.scss';
import CardHeader from '../Card-header/Card-header.js';
import CardMain from '../Card-main/Card-main.js';
import CardMessage from '../Card-message/Card-message';
import { setClassName } from '../../shared/helpers/set-class-name'

class Card extends React.Component {
    constructor() {
        super();

        this.state = {
            isSelected: false,
            isDisabled: false,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.checkIsOut();
    }

    checkIsOut() {
        const cardData = this.props.cardData;

        if (cardData.amount === 0) {
            this.setState({
                isDisabled: true
            });
        }
    }

    handleClick(event) {
        if (!event.target.classList.contains('card-message')) {
            const { isSelected } = this.state;
            this.setState({ isSelected: !isSelected });
        }
    }

    render() {
        const cardData = this.props.cardData;
        const { isSelected, isDisabled } = this.state;
        const cardClassName = setClassName('card', isSelected, isDisabled);
        const cardCornerClassName = setClassName('card__corner', isSelected, isDisabled);

        return (
            <div onClick={this.handleClick}>
                <div className={cardClassName}>
                    <div className={cardCornerClassName}></div>
                    <CardHeader cardHeader={cardData.header} />

                    <CardMain
                        isSelected={isSelected}
                        isDisabled={isDisabled}
                        info={cardData.info}
                        taste={cardData.taste}
                        weight={cardData.weight}
                    />
                </div>

                <CardMessage
                    handleClick={this.handleClick}
                    isSelected={isSelected}
                    isDisabled={isDisabled}
                    messages={cardData.messages}
                ></CardMessage>
            </div>
        );
    }
}

export default Card;
