import React from 'react';

import { Card, Text, Box, Image, Heading, Link } from 'theme-ui';

const RecipeCard = ({ recipe }) => {
	return (
		<Card
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				bg: 'muted',
				borderRadius: '10px',
				boxShadow: '6px 6px 24px 4px rgba(235,226,235,0.36)',
			}}
		>
			<Image
				src={recipe.recipe.image}
				sx={{ marginY: '10px', width: '100%', height: 'auto' }}
			/>
			<Heading as='h2' sx={{ marginBottom: '20px', fontSize: [3, 4, 5] }}>
				{recipe.recipe.label}
			</Heading>
			<Text sx={{ marginY: '10px' }}>
				Serves: {Math.floor(recipe.recipe.yield)}
			</Text>
			<Box
				as='ul'
				sx={{
					marginY: '20px',
					listStyle: 'square',
					width: '70%',
					fontSize: [2, 3, 4],
				}}
			>
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
