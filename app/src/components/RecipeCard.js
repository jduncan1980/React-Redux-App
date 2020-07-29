import React from 'react';

import { Card, Text, Box, Image, Heading, Link } from 'theme-ui';

const RecipeCard = ({ recipe }) => {
	return (
		<Card>
			<Heading as='h2' sx={{ marginBottom: '10px' }}>
				{recipe.recipe.label}
			</Heading>
			<Image
				src={recipe.recipe.image}
				sx={{ marginBottom: '10px', width: '100%', height: 'auto' }}
			/>
			<Text sx={{ marginTop: '10px' }}>
				Serves: {Math.floor(recipe.recipe.yield)}
			</Text>
			<Box as='ul'>
				{recipe.recipe.ingredientLines.map((item, index) => {
					return <li key={`${item}-${index}`}>{item}</li>;
				})}
			</Box>
			<Link href={recipe.recipe.url} target='_blank'>
				Get Full Recipe from {recipe.recipe.source}
			</Link>
		</Card>
	);
};

export default RecipeCard;
