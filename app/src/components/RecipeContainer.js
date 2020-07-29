import React from 'react';
import { connect } from 'react-redux';
import { Flex } from 'theme-ui';
import RecipeCard from './RecipeCard';

const RecipeContainer = (props) => {
	return (
		<Flex
			sx={{
				flexWrap: 'wrap',
				justifyContent: 'space-evenly',
				marginTop: '50px',
			}}
		>
			{props.recipes.map((recipe, index) => {
				return (
					<RecipeCard recipe={recipe} key={`${recipe.recipe.label}-${index}`} />
				);
			})}
		</Flex>
	);
};

const mapStateToProps = (state) => {
	return {
		recipes: state.recipes,
	};
};

export default connect(mapStateToProps, {})(RecipeContainer);
