/** @jsx jsx */
import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import {
	jsx,
	Input,
	Flex,
	Button,
	Text,
	Select,
	Field,
	Spinner,
} from 'theme-ui';
import { fetchRecipes, moreResults } from '../actions/recipeActions';

const SearchForm = (props) => {
	const [queryString, setQueryString] = useState('');
	const [selectValue, setSelectValue] = useState('balanced');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (queryString !== '') {
			props.fetchRecipes(queryString.replace(/[ ,]+/g, ','), selectValue);
		}
	};

	const prevPage = () => {
		if (queryString !== '') {
			props.moreResults(props.fromPage - 10);
			props.fetchRecipes(queryString.replace(/[ ,]+/g, ','), selectValue);
		}
	};

	const nextPage = () => {
		if (queryString !== '') {
			props.moreResults(props.fromPage + 10);
			props.fetchRecipes(queryString.replace(/[ ,]+/g, ','), selectValue);
		}
	};

	if (props.isFetching) {
		return (
			<React.Fragment>
				<span sx={{ fontSize: 3, marginY: '20px' }}>**Loading Results**</span>
				<Spinner />
			</React.Fragment>
		);
	}

	return (
		<Fragment>
			<Flex
				as='form'
				onSubmit={handleSubmit}
				sx={{
					marginY: ['50px'],
					flexDirection: ['column', 'row'],
					justifyContent: 'space-evenly',
					alignItems: ['center', 'stretch'],
					padding: '20px 10px',
					width: ['95%', '90%', '65%'],
				}}
			>
				<Field
					as={Input}
					name='search'
					label='Search By Ingredient(s)'
					value={queryString}
					onChange={(e) => setQueryString(e.target.value)}
					sx={{ marginBottom: ['20px', 0] }}
				/>

				<Field
					as={Select}
					name='diet'
					label='Diet Type'
					value={selectValue}
					onChange={(e) => setSelectValue(e.target.value)}
				>
					<option value='balanced'>Balanced</option>
					<option value='high-protein'>High Protein</option>
					<option value='high-fiber'>High Fiber</option>
					<option value='low-fat'>Low Fat</option>
					<option value='low-carb'>Low Carb</option>
					<option value='low-sodium'>Low Sodium</option>
				</Field>
				<Button
					type='submit'
					sx={{ marginLeft: [0, '15px'], marginTop: ['20px', 0] }}
				>
					Search Recipes
				</Button>
			</Flex>

			<Flex as='div' sx={{ flexDirection: 'column', alignItems: 'center' }}>
				{props.toPage && (
					<Text sx={{ marginBottom: '20px' }}>
						Displaying Results {props.fromPage + 1} to {props.toPage}
					</Text>
				)}
				<Flex>
					{props.fromPage > 0 && (
						<Button onClick={prevPage} sx={{ margin: '15px' }}>
							Prev Page
						</Button>
					)}
					{props.more && (
						<Button onClick={nextPage} sx={{ margin: ['15px'] }}>
							Next Page
						</Button>
					)}
				</Flex>
			</Flex>
		</Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		fromPage: state.fromPage,
		toPage: state.toPage,
		more: state.more,
		isFetching: state.isFetching,
	};
};

export default connect(mapStateToProps, { fetchRecipes, moreResults })(
	SearchForm
);
