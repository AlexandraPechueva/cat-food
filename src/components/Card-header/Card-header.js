import React from 'react';
import './Card-header.scss';

class CardHeader extends React.Component {
    constructor() {
        super();
    }
    render() {
        const { cardHeader } = this.props;

        return (
            <div className="card-header">
                <h1 className="card-title">{cardHeader.name}</h1>
                <h2 className="card-subtitle">{cardHeader.description}</h2>
            </div>
        );
    }
}

export default CardHeader;