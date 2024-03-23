import type { Meta, StoryObj } from '@storybook/react'
import { PostInput } from './PostInput'

const meta = {
	title: 'Example/PostInput',
	component: PostInput,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof PostInput>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
}
