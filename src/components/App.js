import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			fruit: [],
			filters: [],
			currentFilter: null
		}
	}

	handleFilterChange = (event) => {
		console.log('new filter: ', event.target.value);
     	this.setState({ currentFilter: event.target.value });
	}

	fetchFilters = () => {
	    fetch('/api/fruit_types')
	      .then(response => response.json())
	      .then(filters => this.setState({ filters }));
	  	}

	componentWillMount() {
	    this.fetchFilters()
	    fetch('/api/fruit')
	      .then(response => response.json())
	      .then(items => this.setState({fruit: items}));
  	}

	render() {
		return <FruitBasket updateFilterCallback={this.handleFilterChange} filters={this.state.filters} fruit={this.state.fruit} currentFilter={this.state.currentFilter}/>

	}
}
// const App = () => <FruitBasket />;

export default App;
