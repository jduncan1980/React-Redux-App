import React from 'react';
import { Container } from 'theme-ui';
import SearchForm from './components/SearchForm';
import RecipeContainer from './components/RecipeContainer';

function App() {
	return (
		<Container>
			<SearchForm />
			<RecipeContainer />
		</Container>
	);
}

export default App;
