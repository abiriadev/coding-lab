import type { Meta, StoryObj } from '@storybook/react'
import { ErrorUi } from './ErrorUi'

const meta = {
	title: 'Example/ErrorUi',
	component: ErrorUi,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof ErrorUi>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
}
