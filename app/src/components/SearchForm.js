/** @jsx jsx */
import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { jsx, Label, Input, Flex, Button, Text, Select } from 'theme-ui';
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
			props.fetchRecipes(queryString.replace(/[ ,]+/g, ','));
		}
	};

	const nextPage = () => {
		if (queryString !== '') {
			props.moreResults(props.fromPage + 10);
			props.fetchRecipes(queryString.replace(/[ ,]+/g, ','));
		}
	};

	if (props.isFetching) {
		return <span>**Loading Results**</span>;
	}

	return (
		<Fragment>
			<Flex
				as='form'
				onSubmit={handleSubmit}
				sx={{
					marginY: ['50px'],
					flexDirection: 'row',
					justifyContent: 'center',
					padding: '0 10px',
					maxWidth: ['95%', '90%', '65%'],
				}}
			>
				<Label
					htmlFor='search'
					sx={{
						marginRight: [0, '50px'],
						display: 'flex',
						flexDirection: ['column', 'row'],
					}}
				>
					Search By Ingredient(s)
					<Input
						value={queryString}
						onChange={(e) => setQueryString(e.target.value)}
						name='search'
						id='search'
					/>
				</Label>
				<Label
					htmlFor='diet'
					sx={{
						marginRight: [0, '50px'],
						display: 'flex',
						flexDirection: ['column', 'row'],
					}}
				>
					Diet Type
					<Select
						name='diet'
						id='diet'
						value={selectValue}
						onChange={(e) => setSelectValue(e.target.value)}
					>
						<option value='balanced'>Balanced</option>
						<option value='high-protein'>High Protein</option>
						<option value='high-fiber'>High Fiber</option>
						<option value='low-fat'>Low Fat</option>
						<option value='low-carb'>Low Carb</option>
						<option value='low-sodium'>Low Sodium</option>
					</Select>
				</Label>
				<Button type='submit' sx={{ marginLeft: '15px' }}>
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
						<Button onClick={nextPage} sx={{ margin: '15px' }}>
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
