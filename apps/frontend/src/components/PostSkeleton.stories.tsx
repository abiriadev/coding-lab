import type { Meta, StoryObj } from '@storybook/react'
import { PostSkeleton } from './PostSkeleton'

const meta = {
	title: 'Example/PostSkeleton',
	component: PostSkeleton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof PostSkeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
	decorators: [
		S => (
			<div className="w-[32rem]">
				<S />
			</div>
		),
	],
}
