import type { Meta, StoryObj } from '@storybook/react'
import { CommentInput } from './CommentInput'

const meta = {
	title: 'Example/CommentInput',
	component: CommentInput,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof CommentInput>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
}
