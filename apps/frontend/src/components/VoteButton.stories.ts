import type { Meta, StoryObj } from '@storybook/react'
import { VoteButton } from './VoteButton'

const meta = {
	title: 'Example/VoteButton',
	component: VoteButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {
		count: 123,
	},
} satisfies Meta<typeof VoteButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
}

export const DownVote: Story = {
	args: {
		down: true,
	},
}

export const Pressed: Story = {
	args: {
		pressed: true,
	},
}
