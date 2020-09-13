import React from 'react';
import './Card-header.scss';

class CardHeader extends React.Component {
    render() {
        const { cardHeader } = this.props;

        return (
            <div className="card-header">
                <p className="card-description">{cardHeader.description}</p>
                <h2 className="card-title">{cardHeader.name}</h2>
            </div>
        );
    }
}

export default CardHeader;