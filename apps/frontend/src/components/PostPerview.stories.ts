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
	args: {
		title: 'Best way to code Java on an iPad',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
	},
}
