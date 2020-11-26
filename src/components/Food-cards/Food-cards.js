import React from 'react';
import picture from '../../images/funbox_logo.png';
import './Food-cards.scss';
import Card from '../Card/Card.js';

const data = [
	{
		id: 1,
		header: {
			name: 'Нямушка',
			description: 'Сказочное заморское яство',
		},
		picture,
		taste: 'с фуа-гра',
		info: {
			portions: 10,
			present: 'мышь',
			additional: '',
		},
		amount: 3,
		weight: '0,5',
		messages: {
		default: 'Чего сидишь? Порадуй котэ, ',
 			selected: 'Печень гусиная свежайшая',
			disabled: 'Печалька, с фуа-гра закончился.'
		},
	},

	{
		id: 2,
		header: {
		name: 'Нямушка',
			description: 'Сказочное заморское яство',
		},
		picture,
		taste: 'с рыбой',
		info: {
			portions: 40,
			present: '2 мыши',
			additional: '',
		},
		amount: 5,
		weight: '2',
		messages: {
			default: 'Чего сидишь? Порадуй котэ, ',
			selected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
			disabled: 'Печалька, с рыбой закончился.'
		},
	},

	{
		id: 3,
		header: {
			name: 'Нямушка',
			description: 'Сказочное заморское яство',
		},
		picture,
		taste: 'с курой',
		info: {
			portions: 100,
			present: '5 мышей',
			additional: 'заказчик доволен',
		},
		weight: '5',
		amount: 0,
		messages: {
			default: 'Чего сидишь? Порадуй котэ, ',
			selected: 'Курочка вкуснейшая',
			disabled: 'Печалька, с курой закончился.'
		},
	},
];

class FoodCards extends React.Component {
	render() {
		return (
			<div className="cards-area">
				{data.map(item => {
					return (
						<Card
						cardData={item}
						key={item.id}></Card>
					);
				})}
			</div>
		);
	}
}

export default FoodCards;