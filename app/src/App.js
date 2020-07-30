import React from 'react';
import { Container, Flex, Box } from 'theme-ui';
import SearchForm from './components/SearchForm';
import RecipeContainer from './components/RecipeContainer';
import Header from './components/Header';
import Instructions from './components/Instructions';
import Footer from './components/Footer';

function App() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				minHeight: '100vh',
			}}
		>
			<Header />
			<Container as='main'>
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
			<Footer />
		</Box>
	);
}

export default App;
