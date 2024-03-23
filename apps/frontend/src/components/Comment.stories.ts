import type { Meta, StoryObj } from '@storybook/react'
import { Comment } from './Comment'

const meta = {
	title: 'Example/Comment',
	component: Comment,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Comment>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		content:
			'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
	},
}
