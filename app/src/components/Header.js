/** @jsx jsx */
import React from 'react';
import { jsx, Flex, Heading } from 'theme-ui';

export default function Header() {
	return (
		<Flex
			sx={{
				justifyContent: 'space-between',
				alignItems: 'center',
				width: '100%',
				padding: '20px',
				bg: 'primary',
			}}
		>
			<Heading as='h1'>My Recipe App</Heading>
			<div id='edamam-badge' data-color='white'></div>
		</Flex>
	);
}
