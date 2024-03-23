import type { Meta, StoryObj } from '@storybook/react'
import { CommentsButton } from './CommentsButton'

const meta = {
	title: 'Example/CommentsButton',
	component: CommentsButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof CommentsButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		count: 123,
	},
}
