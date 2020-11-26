import React from 'react';
import './Card-main.scss';
import { setClassName } from '../../shared/helpers/set-class-name';

class CardMain extends React.Component {
	render() {
		const { info, taste, weight, isSelected, isDisabled } = this.props;
		const defaultClassName = 'card-main__weight';
		const weightClassName = setClassName(defaultClassName, isSelected, isDisabled);


		return (
			<div className="card-main">
				<p className="card-main__taste">{taste}</p>
				<ul className="card-main__features">
					<li><span className="card-main__portions-amount">{info.portions}</span> порций</li>
					<li>{info.present} в подарок</li>
 					{info.additional ? <li>{info.additional}</li> : ''}
				</ul>

				<div className={weightClassName}><span className="card-main__weight-value">{weight}</span>кг</div>
			</div>
		);
	}
}

export default CardMain;
