import type { Preview } from '@storybook/react'
import '../src/index.css'
import { StyledEngineProvider } from '@mui/material'

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
	],
}

export default preview
