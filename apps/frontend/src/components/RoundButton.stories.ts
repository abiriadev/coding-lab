import type { Meta, StoryObj } from '@storybook/react'
import { RoundButton } from './RoundButton'

const meta = {
	title: 'Example/RoundButton',
	component: RoundButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof RoundButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
}
