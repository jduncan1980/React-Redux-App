import React from 'react';
import { Flex, Text, Heading } from 'theme-ui';

export default function Instructions() {
	return (
		<Flex
			sx={{
				flexDirection: 'column',
				width: '60%',
				alignItems: 'center',
				marginTop: '30px',
			}}
		>
			<Heading as='h2' sx={{ fontSize: [4, 5, 6], paddingY: '20px' }}>
				Hungry? It's simple...
			</Heading>

			<Text as='span' sx={{ fontSize: [2, 3, 4] }}>
				Pick some ingredients, pick a diet profile (optional), and get back a
				list of great recipes!
			</Text>
		</Flex>
	);
}
