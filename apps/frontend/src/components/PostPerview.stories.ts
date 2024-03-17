import type { Meta, StoryObj } from '@storybook/react'
import { PostPreview } from './PostPreview'

const meta = {
	title: 'Example/PostPreview',
	component: PostPreview,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof PostPreview>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
}
