import type { Meta, StoryObj } from '@storybook/react'
import { FlatButton } from './FlatButton'

const meta = {
	title: 'Example/FlatButton',
	component: FlatButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof FlatButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		children: 'Button',
	},
}
