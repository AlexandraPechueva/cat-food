import React from 'react';
import './App.scss';
import FoodCards from './components/Food-cards/Food-cards.js';

class App extends React.Component {
	render() {
		return (
			<div className="page">
				<div className="cards-wrapper">
				<h1 className="title">Ты сегодня покормил кота?</h1>
				<FoodCards></FoodCards>
			</div>
		</div>
	);
  }
}

export default App;
