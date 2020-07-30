import React from 'react';
import { Box, Text } from 'theme-ui';

export default function Footer() {
	const date = new Date();
	return (
		<Box
			as='footer'
			sx={{
				width: '100%',
				margin: '5px',
				marginTop: 'auto',
				color: 'secondary',
				textAlign: 'center',
			}}
		>
			<Text as='span'>&copy;{date.getFullYear()} Jason Duncan. </Text>
		</Box>
	);
}
