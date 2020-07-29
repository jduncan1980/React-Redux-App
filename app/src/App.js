import React from 'react';
import { Container } from 'theme-ui';
import SearchForm from './components/SearchForm';
import RecipeContainer from './components/RecipeContainer';
import Header from './components/Header';

function App() {
	return (
		<React.Fragment>
			<Header />
			<Container>
				<SearchForm />
				<RecipeContainer />
			</Container>
		</React.Fragment>
	);
}

export default App;
