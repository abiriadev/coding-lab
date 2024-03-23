import type { Meta, StoryObj } from '@storybook/react'
import { AppBar } from './AppBar'

const meta = {
	title: 'Example/AppBar',
	component: AppBar,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
	args: {
		position: 'static',
	},
} satisfies Meta<typeof AppBar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
}
