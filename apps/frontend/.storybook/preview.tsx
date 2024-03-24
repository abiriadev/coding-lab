import type { Preview } from '@storybook/react'
import { StyledEngineProvider } from '@mui/material'
import { withRouter } from 'storybook-addon-react-router-v6'
import '../src/index.css'

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		S => (
			<StyledEngineProvider injectFirst>
				<S />
			</StyledEngineProvider>
		),
		withRouter,
	],
}

export default preview
