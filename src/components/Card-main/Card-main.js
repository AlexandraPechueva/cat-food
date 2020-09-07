import React from 'react';
import './Card-main.scss';

class CardMain extends React.Component {
    constructor() {
        super();
    }
    render() {
        const { info, taste, weight } = this.props;
        console.log(info, taste)
        return (
            <div className="card-main">
                <p>{info.portions} порций</p>
                <p>{info.present} в подарок</p>
                {info.additional ? <p>{info.additional}</p> : ''}

                <p>{taste}</p>
                <p>{weight} кг</p>
            </div>
        );
    }
}

export default CardMain;