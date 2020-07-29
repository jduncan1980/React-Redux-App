const dark = {
	breakpoints: ['600px', '900px', '1200px', '1800px'],
	colors: {
		text: '#fff',
		background: '#060606',
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
			width: ['95%', null, '90%', null, '80%'],
			// height: "100%",
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
			width: ['100%', '45%', '30%'],
		},
	},
	styles: {
		Container: {
			p: 3,
			maxWidth: 1024,
		},
		root: {
			fontFamily: 'body',
			lineHeight: 'body',
			fontWeight: 'body',
			boxSizing: 'border-box',
		},
		h1: {
			variant: 'textStyles.display',
		},
		h2: {
			variant: 'textStyles.heading',
			fontSize: 5,
		},
		h3: {
			variant: 'textStyles.heading',
			fontSize: 4,
		},
		h4: {
			variant: 'textStyles.heading',
			fontSize: 3,
		},
		h5: {
			variant: 'textStyles.heading',
			fontSize: 2,
		},
		h6: {
			variant: 'textStyles.heading',
			fontSize: 1,
		},
		a: {
			color: 'primary',
			'&:hover': {
				color: 'secondary',
			},
		},
		pre: {
			variant: 'prism',
			fontFamily: 'monospace',
			fontSize: 1,
			p: 3,
			color: 'text',
			bg: 'muted',
			overflow: 'auto',
			code: {
				color: 'inherit',
			},
		},
		code: {
			fontFamily: 'monospace',
			color: 'secondary',
			fontSize: 1,
		},
		inlineCode: {
			fontFamily: 'monospace',
			color: 'secondary',
			bg: 'muted',
		},
		table: {
			width: '100%',
			my: 4,
			borderCollapse: 'separate',
			borderSpacing: 0,
			'th,td': {
				textAlign: 'left',
				py: '4px',
				pr: '4px',
				pl: 0,
				borderColor: 'muted',
				borderBottomStyle: 'solid',
			},
		},
		th: {
			verticalAlign: 'bottom',
			borderBottomWidth: '2px',
		},
		td: {
			verticalAlign: 'top',
			borderBottomWidth: '1px',
		},
		hr: {
			border: 0,
			borderBottom: '1px solid',
			borderColor: 'muted',
		},
		img: {
			maxWidth: '100%',
		},
	},
	prism: {
		'.comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url': {
			color: 'gray',
		},
		'.comment': {
			fontStyle: 'italic',
		},
		'.property,.tag,.boolean,.number,.constant,.symbol,.deleted,.function,.class-name,.regex,.important,.variable': {
			color: 'purple',
		},
		'.atrule,.attr-value,.keyword': {
			color: 'primary',
		},
		'.selector,.attr-name,.string,.char,.builtin,.inserted': {
			color: 'secondary',
		},
	},
};

export default dark;
