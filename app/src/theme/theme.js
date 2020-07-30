const dark = {
	breakpoints: ['600px', '900px', '1200px', '1800px'],
	colors: {
		text: '#fff',
		background: '#1b0b30',
		primary: '#3cf',
		secondary: '#e0f',
		muted: '#191919',
		highlight: '#29112c',
		gray: '#999',
		purple: '#c0f',
	},
	fonts: {
		body:
			'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
		heading: 'inherit',
		monospace: 'Menlo, monospace',
	},
	fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
	fontWeights: {
		body: 400,
		heading: 700,
		display: 900,
	},
	lineHeights: {
		body: 1.5,
		heading: 1.25,
	},
	textStyles: {
		heading: {
			fontFamily: 'heading',
			fontWeight: 'heading',
			lineHeight: 'heading',
		},
		display: {
			variant: 'textStyles.heading',
			fontSize: [5, 6],
			fontWeight: 'display',
			letterSpacing: '-0.03em',
			mt: 3,
		},
	},
	layout: {
		container: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			width: ['100%', null, null, null, '80%'],
		},
	},
	cards: {
		primary: {
			display: 'flex',
			flexDirection: 'column',
			backgroundColor: 'background',
			border: '4px solid #e0f',
			padding: '20px',
			margin: '30px',
			width: ['100%', null, '40%', null, '29%'],
		},
	},
	styles: {
		root: {
			fontFamily: 'body',
			lineHeight: 'body',
			fontWeight: 'body',
			boxSizing: 'border-box',
		},
		a: {
			margin: '10px',
			marginTop: 'auto',
			fontSize: [1, 2, 3, 4],
			textAlign: 'center',
			display: 'inline-block',
			textDecoration: 'none',
			color: 'primary',
			transition: 'all .3s ease',

			'&:hover': {
				color: 'secondary',
				transform: 'scale(1.1)',
			},
		},
	},
};

export default dark;
