import React from 'react';
import { Container, Flex } from 'theme-ui';
import SearchForm from './components/SearchForm';
import RecipeContainer from './components/RecipeContainer';
import Header from './components/Header';
import Instructions from './components/Instructions';

function App() {
	return (
		<React.Fragment>
			<Header />
			<Container>
				<Flex
					sx={{
						flexDirection: 'column',
						padding: '10px',
						backgroundColor: 'muted',
						borderRadius: '20px',
						marginTop: '40px',
						alignItems: 'center',
						width: ['95%', null, '80%'],
						border: '1px solid white',
					}}
				>
					<Instructions />
					<SearchForm />
				</Flex>
				<RecipeContainer />
			</Container>
		</React.Fragment>
	);
}

export default App;
